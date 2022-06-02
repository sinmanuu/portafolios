import React from "react";
import "./style.css";

export const Contacto = () => {
	return (
		<div className="page">
			<h1 className="heading">Contacto</h1>
			<form className="contact" action="mailto:sinmanuu@gmail.com">
				<input type="text" placeholder="Nombre" />
				<input type="text" placeholder="Apellidos" />
				<input type="email" placeholder="Email" />
				<textarea placeholder="Motivo de contacto" />
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
};
