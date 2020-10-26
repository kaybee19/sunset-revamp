import React from 'react';
import { Link } from "gatsby";
import logo from '../images/sunsetLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {

	render() {

		return (
			<div className="footerClass">
				<img src={logo} className="footerLogo" alt="sunset-logo"/>
				<ul className="listClass">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				<div className="iconClass">
					<ul>
						<li>
							<a target="_blank" href="https://www.facebook.com/sunsetdriveng/">
								<FontAwesomeIcon icon={faFacebookF} size="lg" />
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.linkedin.com/company/sunset-drivein/">
								<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.instagram.com/sunsetdriveng/">
								<FontAwesomeIcon icon={faInstagram} size="lg" />
							</a>
						</li>
						<li>
							<a target="_blank" href="https://twitter.com/sunsetdriveng">
								<FontAwesomeIcon icon={faTwitter} size="lg" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
