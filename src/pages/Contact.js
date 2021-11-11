import React, { useState, useRef } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact(props) {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_0q5n6uk',
				'template_hcn0a9h',
				form.current,
				'user_IUbfjy62Q6MDwAoXavPIX'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<div>
			<form ref={form} onSubmit={sendEmail}>
				<label class="form-control">Name</label>
				<input class="form-control" type="text" name="user_name" />
				<label class="form-control">Email</label>
				<input class="form-control" type="email" name="user_email" />
				<label class="form-control">Message</label>
				<textarea class="form-control" name="message" />
				<input type="submit" value="Send" />
			</form>
		</div>
	);
}
