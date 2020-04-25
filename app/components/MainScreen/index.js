import React from 'react';
import Button from '../Button';

import './styles.css';


export default class MainScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="main-screen__content">
				<img className="main-screen__logo" src={this.props.image} alt="logo"/>
					<p className="main-screen__description">Configure repository connection and synchronization settings</p>
					<Button buttonClass="button button_view_action" textClass="text_size_xs text_height_xl" link="/settings" text="Open settings"/>
			</div>
		)
	}
}

MainScreen.defaultProps = {
	image: './assets/images/logo.svg'
};