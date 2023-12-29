import React from "react";
import { useParams } from "react-router";

export const User = () => {
	const { name, last_name } = useParams();

	return (
		<div>
			{(!name || !last_name) && <h1>There is not a user to show on screen</h1>}
			{name && last_name && (
				<h1>
					User: {name} Last Name: {last_name}
				</h1>
			)}
		</div>
	);
};
