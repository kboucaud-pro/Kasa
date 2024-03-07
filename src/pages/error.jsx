import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import { Link } from "react-router-dom";

import "../styles/error.css";

function Error () {
	return (
		<div className="content">
			<Header />
				<span className="error-id">404</span>
				<span className="error-text">Oups! La page que vous demandez n'existe pas.</span>
				<Link to="/">Retourner sur la page d’accueil</Link>
			<Footer />
		</div>
	)
}

export default Error;