import React from 'react';

import './styles.css';

export default class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		console.log(event.target.value);
		this.setState({
			value: event.target.value
		})
	}

	render() {
		return (
			<input
				className="input"
				id={this.props.id}
				name={this.props.name}
				type={this.props.type}
				onChange={this.handleChange}
				defaultValue={this.props.value}
				placeholder={this.props.placeholder} />
		)
	}
}

Input.defaultProps = {
	type: 'text'
};