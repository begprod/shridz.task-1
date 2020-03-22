import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

import './css/styles.css';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header/>
				<main className="layout page__content">
					<div className="layout__container">
						<Form/>
					</div>
				</main>
				<Footer/>
			</React.Fragment>
		)
	}
}

ReactDom.render(<App/>, document.getElementById('app'));