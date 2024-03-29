import React from 'react';
import icons from "./icons";

import './styles.css';

export default class BuildCard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="card build-card">
				<div
					className={`icon build-card__icon icon_view_${this.props.status}`}
					dangerouslySetInnerHTML={{ __html: icons[this.props.status] }}
				>
				</div>
				<div className="build-card__main-info">
					<div className="build-card__title">
						<div className="text text_size_s text_height_xm text_decoration_overflow">
							<span className={`text text_size_m text_height_xm text_vertical_center text_d text_view_${this.props.status}`}>
								{this.props.buildNumber}
							</span>
							{this.props.commitMessage}
						</div>
					</div>
					<div className="build-card__meta">
						<div className="icon-plus icon-plus_vertical_center build-card__meta-item">
							<div className="icon icon_view_light icon-plus__icon icon-plus__icon_gap_xs">
								<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.2 8C3.2 8.27 3.2225 8.5375 3.265 8.8H0.3C0.135 8.8 0 8.665 0 8.5V7.5C0 7.335 0.135 7.2 0.3 7.2H3.265C3.2225 7.4625 3.2 7.73 3.2 8ZM15.7 7.2H12.735C12.78 7.4625 12.8 7.73 12.8 8C12.8 8.27 12.7775 8.5375 12.735 8.8H15.7C15.865 8.8 16 8.665 16 8.5V7.5C16 7.335 15.865 7.2 15.7 7.2ZM8 5.2C7.2525 5.2 6.55 5.4925 6.02 6.02C5.49 6.55 5.2 7.2525 5.2 8C5.2 8.7475 5.49 9.45 6.02 9.98C6.55 10.5075 7.2525 10.8 8 10.8C8.7475 10.8 9.45 10.5075 9.98 9.98C10.51 9.45 10.8 8.7475 10.8 8C10.8 7.2525 10.51 6.55 9.98 6.02C9.45 5.4925 8.7475 5.2 8 5.2ZM8 4C10.21 4 12 5.79 12 8C12 10.21 10.21 12 8 12C5.79 12 4 10.21 4 8C4 5.79 5.79 4 8 4Z"/>
								</svg>
							</div>
							<div
								className="text text_size_xs text_height_xs text_decoration_overflow icon-plus__text icon-plus__text_gap_xxs">
								{this.props.branchName}
							</div>
							<div
								className="text text_size_xs text_height_xs text_view_additional icon-plus__text">
								{this.props.commitHash}
							</div>
						</div>
						<div className="icon-plus icon-plus_vertical_center build-card__meta-item">
							<div className="icon icon_view_light icon-plus__icon icon-plus__icon_gap_xs">
								<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.125 8C10.0582 8 11.625 6.4332 11.625 4.5C11.625 2.5668 10.0582 1 8.125 1C6.1918 1 4.625 2.5668 4.625 4.5C4.625 6.4332 6.1918 8 8.125 8ZM10.575 8.875H10.1184C9.51133 9.15391 8.83594 9.3125 8.125 9.3125C7.41406 9.3125 6.74141 9.15391 6.13164 8.875H5.675C3.64609 8.875 2 10.5211 2 12.55V13.6875C2 14.4121 2.58789 15 3.3125 15H12.9375C13.6621 15 14.25 14.4121 14.25 13.6875V12.55C14.25 10.5211 12.6039 8.875 10.575 8.875Z"/>
								</svg>
							</div>
							<div
								className="text text_size_xs text_height_xs icon-plus__text icon-plus__text_gap_xxs">
								{this.props.authorName}
							</div>
						</div>
					</div>
				</div>
				<div className="build-card__side-info">
					<div className="build-card__meta build-card__meta_column">
						<div className="icon-plus icon-plus_vertical_center build-card__meta-item">
							<div className="icon icon_view_light icon-plus__icon icon-plus__icon_gap_xs">
								<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M5.60806 9H4.36264C4.15714 9 3.98901 8.83125 3.98901 8.625V7.375C3.98901 7.16875 4.15714 7 4.36264 7H5.60806C5.81355 7 5.98169 7.16875 5.98169 7.375V8.625C5.98169 8.83125 5.81355 9 5.60806 9ZM8.9707 8.625V7.375C8.9707 7.16875 8.80256 7 8.59707 7H7.35165C7.14615 7 6.97802 7.16875 6.97802 7.375V8.625C6.97802 8.83125 7.14615 9 7.35165 9H8.59707C8.80256 9 8.9707 8.83125 8.9707 8.625ZM11.9597 8.625V7.375C11.9597 7.16875 11.7916 7 11.5861 7H10.3407C10.1352 7 9.96703 7.16875 9.96703 7.375V8.625C9.96703 8.83125 10.1352 9 10.3407 9H11.5861C11.7916 9 11.9597 8.83125 11.9597 8.625ZM8.9707 11.625V10.375C8.9707 10.1687 8.80256 10 8.59707 10H7.35165C7.14615 10 6.97802 10.1687 6.97802 10.375V11.625C6.97802 11.8313 7.14615 12 7.35165 12H8.59707C8.80256 12 8.9707 11.8313 8.9707 11.625ZM5.98169 11.625V10.375C5.98169 10.1687 5.81355 10 5.60806 10H4.36264C4.15714 10 3.98901 10.1687 3.98901 10.375V11.625C3.98901 11.8313 4.15714 12 4.36264 12H5.60806C5.81355 12 5.98169 11.8313 5.98169 11.625ZM11.9597 11.625V10.375C11.9597 10.1687 11.7916 10 11.5861 10H10.3407C10.1352 10 9.96703 10.1687 9.96703 10.375V11.625C9.96703 11.8313 10.1352 12 10.3407 12H11.5861C11.7916 12 11.9597 11.8313 11.9597 11.625ZM14.9487 3.5V14.5C14.9487 15.3281 14.2793 16 13.4542 16H2.49451C1.66941 16 1 15.3281 1 14.5V3.5C1 2.67188 1.66941 2 2.49451 2H3.98901V0.375C3.98901 0.16875 4.15714 0 4.36264 0H5.60806C5.81355 0 5.98169 0.16875 5.98169 0.375V2H9.96703V0.375C9.96703 0.16875 10.1352 0 10.3407 0H11.5861C11.7916 0 11.9597 0.16875 11.9597 0.375V2H13.4542C14.2793 2 14.9487 2.67188 14.9487 3.5ZM13.4542 14.3125V5H2.49451V14.3125C2.49451 14.4156 2.57857 14.5 2.68132 14.5H13.2674C13.3701 14.5 13.4542 14.4156 13.4542 14.3125Z"/>
								</svg>
							</div>
							<div className="text text_size_xs text_height_xs text_view_additional icon-plus__text">21 янв, 03:06
							</div>
						</div>
						<div className="icon-plus icon-plus_vertical_center build-card__meta-item">
							<div className="icon icon_view_light icon-plus__icon icon-plus__icon_gap_xs">
								<svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path
											d="M12.2789 5.75L12.9834 5.04375C13.1299 4.89687 13.1299 4.65937 12.9834 4.5125L12.4535 3.98125C12.307 3.83438 12.07 3.83438 11.9235 3.98125L11.2783 4.62813C10.3088 3.76875 9.08371 3.19375 7.73082 3.04063V1.5H8.60365C8.80939 1.5 8.97772 1.33125 8.97772 1.125V0.375C8.97772 0.16875 8.80939 0 8.60365 0H5.3617C5.15596 0 4.98763 0.16875 4.98763 0.375V1.125C4.98763 1.33125 5.15596 1.5 5.3617 1.5H6.23454V3.04375C3.00506 3.41563 0.498779 6.1625 0.498779 9.5C0.498779 13.0906 3.40095 16 6.98268 16C10.5644 16 13.4666 13.0906 13.4666 9.5C13.4666 8.10312 13.027 6.80937 12.2789 5.75ZM6.98268 14.5C4.22702 14.5 1.99506 12.2625 1.99506 9.5C1.99506 6.7375 4.22702 4.5 6.98268 4.5C9.73833 4.5 11.9703 6.7375 11.9703 9.5C11.9703 12.2625 9.73833 14.5 6.98268 14.5ZM7.35675 11H6.60861C6.40287 11 6.23454 10.8313 6.23454 10.625V6.375C6.23454 6.16875 6.40287 6 6.60861 6H7.35675C7.56249 6 7.73082 6.16875 7.73082 6.375V10.625C7.73082 10.8313 7.56249 11 7.35675 11Z"/>
									</g>
								</svg>

							</div>
							<div className="text text_size_xs text_height_xs text_view_additional icon-plus__text">1 ч
								20 мин
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

BuildCard.defaultProps = {

};