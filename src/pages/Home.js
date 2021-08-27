import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rate from './Rate';

export default function Home(props) {
	const [projections, setProjections] = useState([]); // Projection state
	const [singleProjection, setProjection] = useState({
		sendAmt: '',
		savedAmt: '',
		years: ''
	});

	const [rate, setRate] = useState('');

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

	console.log(rate);

	const handleChange = e => {
		setProjection({ ...singleProjection, [e.target.id]: e.target.value });
	};

	const fee = 2.99;
	const totalAmount = parseInt(singleProjection.sendAmt) + fee;
	const totalSaved = parseInt(singleProjection.savedAmt);
	const netSentUsd = parseInt(
		singleProjection.sendAmt - singleProjection.savedAmt
	);
	const netSentMxn =
		parseInt(singleProjection.sendAmt - singleProjection.savedAmt) * rate;
	const totalSavedUsd = parseInt(singleProjection.years) * netSentUsd;
	const totalSavedMxn = totalSavedUsd * rate;

	// const interest = 0.07;

	return (
		<div className="container" class=".bg-secondary">
			<h1>Savings Projection</h1>
			<div className="container" className="border">
				<form onSubmit={handleSubmit}>
					<div class="mb-3">
						<label name="name">Send</label>
						<input
							type="text"
							id="sendAmt"
							value={singleProjection.sendAmt}
							onChange={handleChange}
						/>
					</div>
					<div class="mb-3">
						<label name="savedAmt">Save</label>
						<input
							type="text"
							id="savedAmt"
							value={singleProjection.savedAmt}
							onChange={handleChange}
						/>
					</div>
					<div class="mb-3">
						<label name="years">Years</label>
						<input
							type="text"
							id="years"
							placeholder="Enter number of years"
							value={singleProjection.years}
							onChange={handleChange}
						/>
					</div>
					<input className="position" type="submit" value="Submit" />
				</form>
			</div>
			<div>
				<h3>You Pay: {totalAmount}</h3>
				<h6>Fee: {fee}</h6>
				<h3>You want to save: {totalSaved}</h3>
				<h3>
					Recipient: {netSentUsd} USD or {netSentMxn} MXN
				</h3>
				<Rate rate={rate => setRate(rate)} />
			</div>
			<div>
				<ul>
					{projections.map(projection => {
						return (
							<li key={projection._id}>
								<Link to={`/${projection._id}`}>
									<h3>You are sending {projection.sendAmt} USD</h3>
									<p>
										You are saving {projection.savedAmt} every month for{' '}
										{projection.years} years and in {projection.years} years you
										will have {projection.savedAmt * 12 * projection.years} USD
									</p>

									<p>
										which is equal to{' '}
										{projection.savedAmt * 12 * projection.years * rate} MXN
									</p>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<p>Disclosures and important details</p>
		</div>
	);
}
