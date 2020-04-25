import React from 'react';
import './styles.css';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="layout footer">
				<div className="layout__container footer__inner">
					<div className="footer__links">
						<a className="footer__link" href="#">Support</a>
						<a className="footer__link" href="#">Learning</a>
					</div>
					<div className="footer__copyright">© 2020 Andrey Aratov</div>
				</div>
			</footer>
		)
	}
}