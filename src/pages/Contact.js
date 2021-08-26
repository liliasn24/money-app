import React, { useState } from 'react';

export default function Contact(props) {
	return (
		<div className="ContactPage">
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
			</form>
			<div className="container">
				<div className="box">
					<i className="fas fa-hotel fa-3x"></i>
					<h3>Location</h3>
					<p>50 Broadway st, New York, NY</p>
				</div>
				<div className="box">
					<i className="fas fa-phone fa-3x"></i>
					<h3>Phone Number</h3>
					<p>(617) 555-5555</p>
				</div>
				<div className="box">
					<i className="fas fa-envelope fa-3x"></i>
					<h3>Email Address</h3>
					<p>moneyapp@moneyapp.com</p>
				</div>
				<footer id="main-footer">
					<p>MoneyApp &copy; 2021, All RIghts Reserved</p>
					<i className="glyphicon glyphicon-cloud"></i>
					<i className="glyphicon glyphicon-remove"></i>
					<i className="glyphicon glyphicon-user"></i>
					<i className="glyphicon glyphicon-envelope"></i>
					<i className="glyphicon glyphicon-thumbs-up"></i>
				</footer>
			</div>
		</div>
	);
}
