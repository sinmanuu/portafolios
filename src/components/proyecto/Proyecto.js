import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../../data/trabajos";
import "./style.css";

export const Proyecto = () => {
	const [proyecto, setProyecto] = useState({});
	const params = useParams();
	//filtramos la lista de trabajo por el que nos llega por la URL
	useEffect(() => {
		let proyecto = trabajos.filter((trabajo) => trabajo.id === params.id);
		setProyecto(proyecto[0]);
	}, []);

	return (
		<div className="page page-work">
			<div className="mask">
				<img src={`/images/${proyecto.id}.webp`} alt={proyecto.nombre} />
			</div>
			<h1 className="heading">Proyecto: {proyecto.id}</h1>
			<p>{proyecto.tecnologias}</p>
			<p>{proyecto.descripcion}</p>
			<a href="#" target="_blank">
				{proyecto.url}
			</a>
		</div>
	);
};
