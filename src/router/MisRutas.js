import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Contacto } from "../components/contacto/Contacto";
import { Curriculum } from "../components/curriculum/Curriculum";
import { Error } from "../components/error/Error";
import { Inicio } from "../components/inicio/Inicio";
import { Footer } from "../components/layout/footer/Footer";
import { HeaderNav } from "../components/layout/header/HeaderNav";
import { Portafolio } from "../components/portafolio/Portafolio";
import { Proyecto } from "../components/proyecto/Proyecto";
import { Servicios } from "../components/servicios/Servicios";
import "./style.css";

export const MisRutas = () => {
	return (
		<BrowserRouter>
			{/*NAVEGACION*/}
			<HeaderNav />
			{/* CONTENIDO INICIAL */}
			<section className="content">
				<Routes>
					<Route path="/" element={<Navigate to="inicio" />} />
					<Route path="/inicio" element={<Inicio />} />
					<Route path="/portafolio" element={<Portafolio />} />
					<Route path="/servicios" element={<Servicios />} />
					<Route path="/curriculum" element={<Curriculum />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/proyecto/:id" element={<Proyecto />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</section>
			{/* FOOTER */}
			<Footer />
		</BrowserRouter>
	);
};
