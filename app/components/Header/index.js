import React from 'react';
import Button from '../Button';

import './styles.css';


export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	showButtons() {
		if (this.props.showButtons) {
			return <div className="header__button-holder">
				<Button
					link="/settings"
					buttonClass="button_view_icon header__button"
					textClass="text_size_xs text_height_m"
					text="Settings"
					iconType="gear"/>
			</div>
		}
	}

	render() {
		return (
			<header className="layout header">
				<div className="layout__container header__inner">
					<a className="text text_size_l text_height_l text_view_secondary text_decoration_no-underline" href="/">
						{ this.props.title }
					</a>

					{this.showButtons()}
				</div>
			</header>
		)
	}
}

Header.defaultProps = {
	title: 'School CI server',
	showButtons: true
};