import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Settings = () => (
	<React.Fragment>
		<Header/>
		<main className="layout page__content">
			<div className="layout__container">
				<Form/>
			</div>
		</main>
		<Footer/>
	</React.Fragment>
);

export default Settings;

