import React from 'react';

import './styles.css';

export default class Input extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<input
				className="input"
				id={this.props.id}
				name={this.props.name}
				type={this.props.type}
				placeholder={this.props.placeholder} />
		)
	}
}

Input.defaultProps = {
	type: 'text'
};