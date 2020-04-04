import React from 'react';
import ReactDom from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route
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
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/settings" component={Settings} />
					<Route path="/build-details" component={BuildDetails} />
					<Route path="/build-history" component={BuildHistory} />
				</Switch>
			</Router>
		)
	}
}

ReactDom.render(<App/>, document.getElementById('app'));