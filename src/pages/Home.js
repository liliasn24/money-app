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

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/projections', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(singleProjection)
			});
			const data = await response.json();
			setProjections([...projections, data]);
			setProjection({
				sendAmt: '',
				savedAmt: '',
				years: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = e => {
		setProjection({ ...singleProjection, [e.target.id]: e.target.value });
	};

	const totalAmount = parseInt(singleProjection.sendAmt) + 15;

	// const exchangeRate = 19.4;
	// const parsedSendAmt = parseInt(sendAmt);
	// const parsedSavedAmt = parseInt(savedAmt);
	// const fee = 2.99;
	// const interest = 0.07;
	//
	// const totalYouPay = () => {
	// 	return sendAmt + fee;
	// };
	//
	// const netSent = () => {
	// 	return parsedSendAmt - parsedSavedAmt;
	// };
	//
	// const receiving = () => {
	// 	netSent * exchangeRate;
	// };
	//
	// const totalSaved = () => {
	// 	return parsedSavedAmt * 12 * years;
	// };

	return (
		<div className="HomePage">
			<h1>Savings Projection</h1>
			<form onSubmit={handleSubmit}>
				<label name="name">Send</label>
				<input
					type="text"
					id="sendAmt"
					value={singleProjection.sendAmt}
					onChange={handleChange}
				/>
				<label name="savedAmt">Save</label>
				<input
					type="text"
					id="savedAmt"
					value={singleProjection.savedAmt}
					onChange={handleChange}
				/>
				<label name="years">Years</label>
				<input
					type="text"
					id="years"
					value={singleProjection.years}
					onChange={handleChange}
				/>
				<input className="position" type="submit" value="Submit" />
			</form>
			<div>
				<h1>Total amount: {totalAmount}</h1>
			</div>
			<ul>
				{projections.map(projection => {
					return (
						<li key={projection._id}>
							<Link to={`/${projection._id}`}>
								<h3>You are sending {projection.sendAmt} USD</h3>
							</Link>
							<p>
								You are saving {projection.savedAmt} every month for{' '}
								{projection.years} years and in {projection.years} years you
								will have {projection.savedAmt * 12 * projection.years}
							</p>
							<p>which is equal to ---- MXN</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
