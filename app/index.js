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
						<Route exact path="/" component={Home} />
						<Route exact path="/settings" component={Settings} />
						<Route exact path="/build-details" component={BuildDetails} />
						<Route exact path="/build-history" component={BuildHistory} />
					</Switch>
				</React.Fragment>
			</Router>
		)
	}
}

ReactDom.render(<App/>, document.getElementById('app'));