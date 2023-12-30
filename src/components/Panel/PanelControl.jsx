import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export const PanelControl = () => {
	return (
		<div>
			<h1>Admin Dashboard</h1>
			<p>Choose one of the next options:</p>
			<nav>
				<ul>
					<li>
						<NavLink to="/panel/home">Home</NavLink>
					</li>
					<li>
						<NavLink to="/panel/create-article">Create Articles</NavLink>
					</li>
					<li>
						<NavLink to="/panel/users-management">User Managament</NavLink>
					</li>
					<li>
						<NavLink to="/panel/about">About</NavLink>
					</li>
				</ul>
			</nav>
			<div>
				{/* Load here the component's sub-routes*/}
				<Outlet />
			</div>
		</div>
	);
};
