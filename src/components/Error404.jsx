import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
	return (
		<div>
			<h1>Error 404 Page Not Found</h1>
			<Link to="/home">Volver al Inicio</Link>
		</div>
	);
};
