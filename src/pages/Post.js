import React, { useState, useEffect, useRef } from 'react';

export default function Show(props) {
	const [projection, setProjection] = useState({}); // Projection state
	const sendAmtInput = useRef(null);
	const savedAmtInput = useRef(null);
	const yearsInput = useRef(null);

	const handleUpdate = async e => {
		e.preventDefault();
		try {
			const response = await fetch(
				`/api/projections/${props.match.params.id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						sendAmt: sendAmtInput.current.value,
						savedAmt: savedAmtInput.current.value,
						years: yearsInput.current.value
					})
				}
			);
			const data = await response.json();
			setProjection(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`/api/projections/${props.match.params.id}`
				);
				const data = await response.json();
				setProjection(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async e => {
		try {
			const response = await fetch(
				`/api/projections/${props.match.params.id}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			const deletedProjection = response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};
	return (
		<div className="ShowPage">
			{Object.keys(projection).length ? (
				<>
					<h3>You are sending {projection.sendAmt} USD</h3>
					<p>
						You are saving {projection.savedAmt} every month for{' '}
						{projection.years} years and in {projection.years} you will have{' '}
						{projection.savedAmt * 12 * projection.years}
					</p>
					<p>which is equal to ---- MXN</p>
					<button onClick={handleDelete}>Delete</button>
				</>
			) : (
				<h1>Loading....</h1>
			)}
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleUpdate}
			>
				<label>
					{' '}
					Sending:{' '}
					<input
						type="text"
						ref={sendAmtInput}
						defaultValue={projection.sendAmt}
					/>
				</label>
				<label>
					{' '}
					Saving:{' '}
					<input
						type="text"
						ref={savedAmtInput}
						defaultValue={projection.savedAmt}
					/>
				</label>
				<label>
					{' '}
					Years:{' '}
					<input type="text" ref={yearsInput} defaultValue={projection.years} />
				</label>
				<input type="submit" value="Update Projection" />
			</form>
		</div>
	);
}
