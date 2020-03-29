import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BuildCard from "../components/BuildCard";

const BuildHistory = () => (
	<React.Fragment>
		<Header/>
		<main className="layout page__content">
			<div className="layout__container">
				<div className="builds-list">
					<div className="build-list__inner">
						<a className="build-list__item" href="#">
							<BuildCard status="success"/>
						</a>
						<a className="build-list__item" href="#">
							<BuildCard status="warning"/>
						</a>
						<a className="build-list__item" href="#">
							<BuildCard status="alert"/>
						</a>
					</div>
				</div>
			</div>
		</main>
		<Footer/>
	</React.Fragment>
);

export default BuildHistory;

