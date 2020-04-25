import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BuildCard from "../components/BuildCard";

const BuildDetails = () => (
	<React.Fragment>
		<Header/>
		<main className="layout page__content">
			<div className="layout__container">
				<div className="build-detail">
					<div className="build-details__card">
						<BuildCard/>
					</div>
					<div className="build-detail__log">
						<pre>
							log
						</pre>
					</div>
				</div>
			</div>
		</main>
		<Footer/>
	</React.Fragment>
);

export default BuildDetails;

