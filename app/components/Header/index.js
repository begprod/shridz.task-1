import React from 'react';
import Button from '../Button';

import './styles.css';


export default class Header extends React.Component {
	render() {
		return (
			<header className="layout header">
				<div className="layout__container header__inner">
					<div className="text text_size_l text_height_l text_view_secondary">School CI server</div>
					<div className="header__button-holder">
						<Button/>
					</div>
				</div>
			</header>
		)
	}
}