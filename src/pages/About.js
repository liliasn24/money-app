import React, { useState } from 'react';
import Main from '../pages/Main';

export default function About(props) {
	return (
		<div className="AboutPage">
			<div>
				<h1>Sendalo</h1>
				<p>
					Sendalo is a mock of a money remittance app intended for people who
					have no access to traditional financial services in the US. It lets
					you see how much money you would have for retirement if you save a
					percentage of the money you usually send. It also converts from USD
					dollars to the local currency using an exchange rate from an API.
				</p>
			</div>
			<Main />
		</div>
	);
}
