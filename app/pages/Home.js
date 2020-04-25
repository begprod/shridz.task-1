import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainScreen from "../components/MainScreen";

const Home = () => (
	<React.Fragment>
		<Header/>
		<main className="layout page__content">
			<div className="layout__container main-screen">
				<MainScreen/>
			</div>
		</main>
		<Footer/>
	</React.Fragment>
);

export default Home;

