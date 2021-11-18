import React, { useState, useRef } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact(props) {
	return (
		<div className="ContactPage">
			<div className="form">
				<h1 className="l-heading">
					<span className="text-primary">Contact</span> Us
				</h1>
				<p>Please fill out the form below to contact us</p>
				<form>
					<div>
						<label>Name</label>
						<input type="text" name="name" id="name" />
					</div>
					<div>
						<label>Email</label>
						<input type="email" name="email" id="email" />
					</div>
					<div>
						<label>Message</label>
						<textarea type="email" name="email" id="email"></textarea>
					</div>
					<button className="btn">Send</button>
				</form>
			</div>
		</div>
	);
}
