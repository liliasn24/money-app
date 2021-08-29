import React, { useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

export default function Footer(props) {
	return (
		<div className="Footer">
			<div className="box">
				<h6>Location</h6>
				<p>50 Broadway St, New York, NY</p>
			</div>
			<div className="box">
				<h6>Phone Number</h6>
				<p>(617) 555-5555</p>
			</div>
			<div className="box">
				<h6>Email Address</h6>
				<p>moneyapp@moneyapp.com</p>
			</div>
			<div className="box">
				<p>MoneyApp &copy; 2021, All RIghts Reserved</p>
			</div>
			<div className="social">
				<div className="icon">
					<FaInstagramSquare />
				</div>
				<div className="icon">
					<FaFacebookSquare />
				</div>
				<div className="icon">
					<FaTwitterSquare />
				</div>
			</div>
		</div>
	);
}
