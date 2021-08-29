import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rate from './Rate';
import Main from '../pages/Main';

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

	// const interest = 0.03;

	return (
		<div className="HomePage">
			<div>
				<h1>Sendalo</h1>
				<h3>Send, Save, Invest, Retire...</h3>
				<Main />
			</div>

			<h3>
				See for yourself how much you can save in 10, 20 or the number of years
				you wish to save
			</h3>
			<div className="main">
				<div className="form">
					<form onSubmit={handleSubmit}>
						<div className="one">
							<label name="name">Send</label>
							<input
								type="text"
								id="sendAmt"
								value={singleProjection.sendAmt}
								onChange={handleChange}
							/>
						</div>
						<div className="one">
							<label name="savedAmt">Save</label>
							<input
								type="text"
								id="savedAmt"
								value={singleProjection.savedAmt}
								onChange={handleChange}
							/>
						</div>
						<div className="one">
							<label name="years">Years</label>
							<input
								type="text"
								id="years"
								placeholder="Enter number of years"
								value={singleProjection.years}
								onChange={handleChange}
							/>
						</div>
						<input className="btn" type="submit" value="Submit" />
					</form>
				</div>
				<div className="view">
					<h4>You Pay: {totalAmount}</h4>
					<h6>Fee: {fee}</h6>
					<h6>Rate:</h6>
					<Rate rate={rate => setRate(rate)} />
					<h4>You want to save: {totalSaved}</h4>
					<h4>
						Recipient: {netSentUsd} USD or {netSentMxn} MXN
					</h4>
				</div>
			</div>
			<div className="grid">
				<ul>
					{projections.map(projection => {
						return (
							<li className="text" key={projection._id}>
								<Link className="text" to={`/${projection._id}`}>
									<p>
										If you save ${projection.savedAmt} every month for{' '}
										{projection.years} years, you will have{' '}
										<span className="number">
											{' '}
											${projection.savedAmt * 12 * projection.years}
										</span>{' '}
										USD dollars{' '}
									</p>
									<p>
										or the equivalent to todays{' '}
										<span className="number">
											${projection.savedAmt * 12 * projection.years * rate}
										</span>{' '}
										MXN pesos.
									</p>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
