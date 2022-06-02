import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Inicio = () => {
	return (
		<div className="home">
			<h1>
				Hola soy Manu Pérez y soy <strong>Desarrollador Web</strong> en Barcelona.
				Ofrezco mis servicios de <strong>programación</strong> y desarrollo en todo
				tipos de proyectos web.
			</h1>
			<h2>
				Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
				relevancia en internet. <Link to="/contacto">Contacta conmigo</Link>
			</h2>

			<section className="last-works">
				<h2 className="heading">Algunos de mis proyectos</h2>

				<div className="works"></div>
			</section>
		</div>
	);
};
