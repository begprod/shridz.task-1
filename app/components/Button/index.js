import React from 'react';
import icons from "./icons";
import './styles.css';

export default class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<a className={`button ${this.props.buttonClass}`} href={this.props.link}>
				<span className="icon button__icon" dangerouslySetInnerHTML={{ __html: icons[this.props.iconType] }}>
				</span>
				<span className={`text button__text ${this.props.textClass}`}>
					{ this.props.text }
				</span>
			</a>
		)
	}
}

Button.defaultProps = {
	link: '#',
	text: 'Button',
	iconType: '',
	buttonClass: '',
	textClass: 'text_size_xs text_height_m'
};