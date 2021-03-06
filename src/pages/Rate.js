import React, { useState, useEffect } from 'react';

export default function Rate(props) {
	const query = process.env.API;

	const [exchangeRate, updateExchangeRate] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(query);
				const data = await response.json();
				updateExchangeRate({ ...data });
				props.rate(data.conversion_rates.MXN);
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);
	return (
		<div className="App">
			{exchangeRate.result == 'success'
				? exchangeRate.conversion_rates.MXN
				: '...WAITING'}
		</div>
	);
}
