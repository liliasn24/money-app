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
					<h3>Update or delete your projection</h3>
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
				<input className="btn" type="submit" value="Update Projection" />
				<button className="btn" onClick={handleDelete}>
					Delete
				</button>
			</form>
		</div>
	);
}
