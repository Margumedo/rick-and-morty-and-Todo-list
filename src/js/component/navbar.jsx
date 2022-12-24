import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to={'/'}>
					Navbar
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to={'/'}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={'/todos'}>
								Todos
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Pricing</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Disabled</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
