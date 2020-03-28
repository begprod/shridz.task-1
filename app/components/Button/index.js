import React from 'react';
import icons from "./icons";
import './styles.css';

export default class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {

		return (
			<this.props.tag
				className={`button ${this.props.buttonClass}`}
				href={(this.props.link ? this.props.link : false)}
				type={(this.props.buttonType ? this.props.buttonType : false)}
			>

				<span
					className="icon button__icon"
					dangerouslySetInnerHTML={{ __html: icons[this.props.iconType] }}>
				</span>

				<span className={`text button__text ${this.props.textClass}`}>
					{ this.props.text }
				</span>
			</this.props.tag>
		)
	}
}

Button.defaultProps = {
	tag: 'a',
	text: 'Button',
	textClass: 'text_size_xs text_height_xl',
	iconType: '',
	buttonClass: ''
};