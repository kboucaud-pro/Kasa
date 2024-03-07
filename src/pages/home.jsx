import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/home.css";
import Banner from "../components/banner";
import Place from "../components/place";

function Home() {
	return (
		<div className="content">
			<Header />
			<Banner />
			<div className="place-list">
				 <Place />
				 <Place />
				 <Place />
				 <Place />
				 <Place />
				 <Place />
			</div>
			<Footer />
		</div>
	)
}

export default Home;