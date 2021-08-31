import React, { useState } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaPiggyBank } from 'react-icons/fa';
import { FaSeedling } from 'react-icons/fa';

export default function Main(props) {
	return (
		<div id="about" className="icons bg-light">
			<div className="flex-items">
				<div>
					<i className="send">
						<FaMoneyBillWave />
					</i>
					<div>
						<h3>Send</h3>
						<p>Send money to family and friends. Great rates and low fees!</p>
					</div>
				</div>
				<div>
					<i className="save">
						<FaPiggyBank />
					</i>
					<div>
						<h3>Save</h3>
						<p>
							Save a percentage of the money you send for an emergency or
							retirement and have accees to the funds day, or retirement.
						</p>
					</div>
				</div>
				<div>
					<i className="invest">
						<FaSeedling />
					</i>
					<div>
						<h3>Invest</h3>
						<p>
							Invest only when you are ready. See our financial education
							section for more info.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
