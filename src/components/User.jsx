import React from "react";
import { useNavigate, useParams } from "react-router";

export const User = () => {
	const { name, last_name } = useParams();
	//Valores por defecto
	//let { name="Daniel", last_name="Ospina" } = useParams();

	const navigate = useNavigate();

	const sendInfo = (e) => {
		e.preventDefault();
		let name = e.target.name.value;
		let last_name = e.target.lastname.value;

		if (name.length <= 0 || last_name.length <= 0) {
			alert("Must fill both of fields");
			navigate("/home");
			return;
		}

		navigate(`/user/${name}/${last_name}`);
	};

	return (
		<div>
			{(!name || !last_name) && <h1>There is not a user to show on screen</h1>}
			{name && last_name && (
				<h1>
					User: {name} Last Name: {last_name}
				</h1>
			)}
			<form onSubmit={sendInfo}>
				<input type="text" name="name" id="name" />
				<input type="text" name="lastname" id="lastname" />
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
};
