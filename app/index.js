import React from 'react';
import ReactDom from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from './pages/Home';
import Settings from './pages/Settings';
import BuildHistory from './pages/BuildHistory';
import BuildDetails from './pages/BuildDetails';

import './css/styles.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/settings">
							<Settings />
						</Route>
						<Route exact path="/build-details">
							<BuildDetails />
						</Route>
						<Route exact path="/build-history">
							<BuildHistory />
						</Route>
					</Switch>
				</React.Fragment>
			</Router>
		)
	}
}

ReactDom.render(<App/>, document.getElementById('app'));