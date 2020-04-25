import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BuildList from "../components/BuildsList";

const BuildHistory = () => (
	<React.Fragment>
		<Header/>
		<main className="layout page__content">
			<div className="layout__container">
				<BuildList/>
			</div>
		</main>
		<Footer/>
	</React.Fragment>
);

export default BuildHistory;

