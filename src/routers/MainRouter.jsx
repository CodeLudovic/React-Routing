import React from "react";
import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";
import { Articles } from "../components/Articles";
import { Error404 } from "../components/Error404";
import { User } from "../components/User";

export const MainRouter = () => {
	return (
		<>
			<h1>Cabecera</h1>
			<hr />

			<nav>
				<ul>
					<li>
						<NavLink
							to="/home"
							className={({ isActive }) => (isActive ? "active" : null)}>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) => (isActive ? "active" : null)}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/articles"
							className={({ isActive }) => (isActive ? "active" : null)}>
							Articles
						</NavLink>
					</li>
				</ul>
			</nav>
			<hr />
			<section className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/user" element={<User />} />
					<Route path="/user/:name/:last_name" element={<User />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</section>

			<hr />
			<footer> Este es el pie de pagina </footer>
		</>
	);
};
