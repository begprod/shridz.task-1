import React from 'react';
import Button from "../Button";
import FieldSet from "../Fieldset";
import axios from 'axios';

import './styles.css';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: {}
		}
	}

	componentWillMount() {
		this.getSettings();
	}

	getSettings() {
		axios.get( 'http://localhost:3000/api/settings')
			.then(response => {
				this.setState({
					settings: response.data.data
				})
			})
			.catch(error => {
				console.log(error);
			})
	}

	onSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const body = {};

		formData.forEach((value, property) => {
			if (property === 'period') {
				value = Number(value);
			}
			body[property] = value
		});

		axios.post('http://localhost:3000/api/settings', body);
	}

	render() {
		return (
			<form className="form" onSubmit={event => this.onSubmit(event)}>
				<div className="form__headline">
					<h2 className="text text_size_s text_height_xm">Settings</h2>
					<p className="text text_size_xs text_height_s text_view_secondary">Configure repository connection and synchronization settings.</p>
				</div>
				<div className="form__input-group">
					<div className="form__input-holder">
						<FieldSet
							labelText="GitHub repository"
							labelFor="repoName"
							value={this.state.settings.repoName}
						/>
					</div>
					<div className="form__input-holder">
						<FieldSet
							labelText="Build command"
							labelFor="buildCommand"
							value={this.state.settings.buildCommand}
						/>
					</div>
					<div className="form__input-holder">
						<FieldSet
							labelText="Main branch"
							labelFor="mainBranch"
							value={this.state.settings.mainBranch}
						/>
					</div>
					<div style={{display: 'none'}} className="form__input-holder">
						<FieldSet
							labelText="period"
							labelFor="period"
							value={this.state.settings.period}
							type="number"
						/>
					</div>
					<div className="form__buttons-group">
						<Button tag="button" text="Save" buttonClass="button_view_action"/>
						<Button text="Cancel" link="/"/>
					</div>
				</div>
			</form>
		)
	}
}