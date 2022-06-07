import React from "react";
import { trabajos } from "../../data/trabajos";
import { Link } from "react-router-dom";
import "../portafolio/style.css";

export const ListadoTrabajos = ({ limite }) => {
	return (
		<section className="works">
			{/* limitamos el numero de proyectos que vamos a recorrer */}
			{trabajos.slice(0, limite).map((trabajo) => {
				return (
					<article key={trabajo.id} className="work-item">
						<div className="mask">
							<img src={`/images/${trabajo.id}.webp`} alt={trabajo.nombre} />
						</div>
						<span>{trabajo.categorias}</span>
						<h2>
							<Link to={`/proyecto/${trabajo.id}`}>{trabajo.nombre}</Link>
						</h2>
						<h3>{trabajo.tecnologias}</h3>
					</article>
				);
			})}
		</section>
	);
};
