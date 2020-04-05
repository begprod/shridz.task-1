import React from 'react';
import Input from "../Input";

import './styles.css';

export default class FieldSet extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="fieldset">
				<label
					className="text text_size_xs text_height_s fieldset__label"
					htmlFor={this.props.labelFor}>
					{this.props.labelText}
				</label>
				<div className="fieldset__input">
					<Input id={this.props.labelFor} name={this.props.labelFor} type={this.props.inputType} placeholder={this.props.labelText}/>
				</div>
			</div>
		)
	}
}