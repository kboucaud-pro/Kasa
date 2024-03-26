import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutCategory from "../components/about-category";

import "../styles/about.css";

import aboutBackground from "../assets/about-background.png"

function About() {
	return (
		<div className="content">
			<Header />
			<div className="banner">
				<img src={aboutBackground} alt="about-background" />
				<div className="shadow-box about-shadow"></div>
			</div>
			<div className="about-list">
				<AboutCategory title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logement, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
				<AboutCategory title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />
				<AboutCategory title="Service" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />
				<AboutCategory title="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hotes
					que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
					En laissant une note aussi bien a l'hote qu'au locataire, cela permet a nos équipes de vérifier que les 
					standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes" />
			</div>
			<Footer />
		</div>
	)
}

export default About;