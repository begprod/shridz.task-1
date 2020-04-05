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
		console.log('asdasd');
	}

	getSettings() {
		axios.get( 'http://127.0.0.1:3000/api/settings',
			{
				headers: {
					'Access-Control-Allow-Origin': '*',
				}
			})
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			})
	}

	render() {
		return (
			<form className="form" action="">
				<div className="form__headline">
					<h2 className="text text_size_s text_height_xm">Settings</h2>
					<p className="text text_size_xs text_height_s text_view_secondary">Configure repository connection
						and synchronization settings.</p>
				</div>
				<div className="form__input-group">
					<div className="form__input-holder">
						<FieldSet labelText="GitHub repository" labelFor="repoName"/>
					</div>
					<div className="form__input-holder">
						<FieldSet labelText="Build command" labelFor="buildCommand"/>
					</div>
					<div className="form__input-holder">
						<FieldSet labelText="Main branch" labelFor="mainBranch"/>
					</div>
					<div className="form__input-holder">
						<div className="fieldset fieldset_view_row">
							<label className="text text_size_xs text_height_s fieldset__label" htmlFor="period">Synchronize every</label>
							<input className="input input_view_small" id="period" name="period" type="text" placeholder="10" />
								<div className="text text_size_xs text_height_s text_view_additional fieldset__value">minutes
								</div>
						</div>
					</div>
					<div className="form__buttons-group">
						<Button tag="button" text="Save" buttonClass="button_view_action"/>
						<Button tag="button" text="Cancel" buttonType="reset"/>
					</div>
				</div>
			</form>
		)
	}
}