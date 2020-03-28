import React from 'react';
import Button from "../Button";
import FieldSet from "../Fieldset";

import './styles.css';

export default class Form extends React.Component {
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
						<FieldSet labelText="GitHub repository" labelFor="repo"/>
					</div>
					<div className="form__input-holder">
						<div className="fieldset">
							<label className="text text_size_xs text_height_s fieldset__label" htmlFor="build">Build command</label>
							<div className="fieldset__input fieldset__input_view_icon">
								<input className="input" id="build" name="build" type="text" placeholder="Build command" />
									<span className="icon icon_view_light">
										<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM12 5.12L10.88 4L8 6.88L5.12 4L4 5.12L6.88 8L4 10.88L5.12 12L8 9.12L10.88 12L12 10.88L9.12 8L12 5.12Z"/>
										</svg>
									</span>
							</div>
						</div>
					</div>
					<div className="form__input-holder">
						<div className="fieldset">
							<label className="text text_size_xs text_height_s fieldset__label" htmlFor="branch">Main branch</label>
							<div className="fieldset__input fieldset__input_view_icon">
								<input className="input" id="branch" name="branch" type="text" placeholder="Main branch" />
										<span className="icon icon_view_light">
											<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM12 5.12L10.88 4L8 6.88L5.12 4L4 5.12L6.88 8L4 10.88L5.12 12L8 9.12L10.88 12L12 10.88L9.12 8L12 5.12Z"/>
											</svg>
										</span>
							</div>
						</div>
					</div>
					<div className="form__input-holder">
						<div className="fieldset fieldset_view_row">
							<label className="text text_size_xs text_height_s fieldset__label" htmlFor="test">Synchronize every</label>
							<input className="input input_view_small" id="test" name="test" type="text" placeholder="10" />
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