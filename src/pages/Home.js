import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const [projections, setProjections] = useState([]); // Projection state
	const [singleProjection, setProjection] = useState({
		sendAmt: '',
		savedAmt: '',
		years: ''
	});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/projections');
				const data = await response.json();
				setProjections(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="HomePage">
			<ul>
				{projections.map(projection => {
					return (
						<li key={projection._id}>
							<Link to={`/${projection._id}`}>
								<h3>You are sending {projection.sendAmt} USD</h3>
							</Link>
							<p>
								You are saving {projection.savedAmt} every month for{' '}
								{projection.years} years
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
