import React, { useState } from 'react';

export default function App(props) {
	return (
		<div className="Español">
			<div className="jumbotron">
				<h1 className="display-4"> Sendalo </h1>
				<p class="lead">
					Que planea hacer cuando se retire? Sendalo es una aplicacion para
					personas que mandan dinero a Mexico a sus familiares. Imaginate poder
					ahorrar dinero para una emergencia de salud, un evento desafortunado,
					o para tu retiro. Ahorra un porcentaje de lo que envias a Mexico para
					tu yo del futuro. Te lo agradeceras.
				</p>
			</div>
			<h1>Ayudanos a construir una mejor aplicación</h1>
			<form className="form">
				<div>
					<label name="Email">Correo electronico</label>
					<input type="text" name="email" />
				</div>
				<div>
					<label name="gender">Genero</label>
					<select name="gender" id="gender">
						<option value="female">Femenino</option>
						<option value="male">Masculino</option>
						<option value="other">Otro</option>
					</select>
				</div>
				<div>
					<label name="age">Edad</label>
					<input type="number" name="age" />
				</div>
				<div>
					<label name="birthday">Fecha de Nacimiento</label>
					<input type="date" name="birthday" />
				</div>
				<div>
					<label name="currentService">Como envias dinero?</label>
					<input type="radio" name="currentService" value="Xoom" /> Xoom
					<input
						type="radio"
						name="currentService"
						value="Delgado Travel"
					/>{' '}
					Delgado Travel
					<input type="radio" name="currentService" value="Remitly" /> Remitly
				</div>
				<div>
					<label name="currentService">Cada cuanto envias dinero?</label>
					<input type="radio" name="currentService" value="Xoom" /> Cada Semana
					<input
						type="radio"
						name="currentService"
						value="Delgado Travel"
					/>{' '}
					Cada Mes
				</div>
				<button className="btn">Enviar</button>
			</form>

			<form className="form">
				<div>
					<label name="Email">Email</label>
					<input type="text" name="name" />
				</div>
				<div>
					<label name="gender">Gender</label>
					<select name="gender" id="gender">
						<option value="female">Female</option>
						<option value="male">Male</option>
						<option value="other">Other</option>
					</select>
				</div>
				<div>
					<label name="age">Age</label>
					<input type="number" name="age" />
				</div>
				<div>
					<label name="birthday">Birthday</label>
					<input type="date" name="birthday" />
				</div>
				<div>
					<label name="currentService">How do you send money?</label>
					<input type="radio" name="currentService" value="Xoom" /> Xoom
					<input
						type="radio"
						name="currentService"
						value="Delgado Travel"
					/>{' '}
					Delgado Travel
					<input type="radio" name="currentService" value="Remitly" /> Remitly
				</div>
				<button className="btn">Send</button>
			</form>
		</div>
	);
}
