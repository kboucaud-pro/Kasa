import React from "react";
import { useParams } from "react-router-dom"
import Header from "../components/header";
import Footer from "../components/footer";

function Place() {

	let id = useParams();

	console.log(id)

	return (
		<div className="content">
			<Header />
			<div>Page de logement</div>
			<Footer />
		</div>
	)
}

export default Place;