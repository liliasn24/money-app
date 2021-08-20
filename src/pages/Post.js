import React, { useState, useEffect } from 'react';

export default function Show(props) {
	const [projection, setProjection] = useState({}); // Projection state

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

	return (
		<div className="ShowPage">
			{Object.keys(projection).length ? (
				<>
					<h3>You are sending {projection.sendAmt} USD</h3>
					<p>
						You are saving {projection.savedAmt} every month for{' '}
						{projection.years} years
					</p>
				</>
			) : (
				<h1>Loading....</h1>
			)}
		</div>
	);
}
