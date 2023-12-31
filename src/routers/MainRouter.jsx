import React from "react";
import {
	Routes,
	Route,
	Link,
	BrowserRouter,
	NavLink,
	Navigate,
} from "react-router-dom";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";
import { Articles } from "../components/Articles";
import { Error404 } from "../components/Error404";
import { User } from "../components/User";
import { PanelControl } from "../components/Panel/PanelControl";
import { Home as HomePanel } from "../components/Panel/Home";
import { Create } from "../components/Panel/Create";
import { Management } from "../components/Panel/Management";
import { About } from "../components/Panel/About";

export const MainRouter = () => {
	return (
		<>
			<h1>Header</h1>
			<hr />

			<nav>
				<ul>
					<li>
						<NavLink
							to="/home"
							className={({ isActive }) => (isActive ? "active" : null)}>
							Home
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
					<li>
						<NavLink
							to="/panel"
							className={({ isActive }) => (isActive ? "active" : null)}>
							Admin Dashboard
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
					<Route
						path="/redirigir"
						element={<Navigate to="/user/Daniel/Ospina" />}
					/>
					<Route path="*" element={<Error404 />} />
					<Route path="/panel/*" element={<PanelControl />}>
						<Route path="home" element={<HomePanel />} />
						<Route path="create-article" element={<Create />} />
						<Route path="users-management" element={<Management />} />
						<Route path="about" element={<About />} />
					</Route>
				</Routes>
			</section>

			<hr />
			<footer> Footer </footer>
		</>
	);
};
