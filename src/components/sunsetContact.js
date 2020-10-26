import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class sunsetContact extends React.Component {

	render() {
		return (
			<div id="message" className="post-content-body col-8 colFix">

					<div className="row" style={{ padding: '0 0 10%' }}>
						<div className="contactInfo col-4">
							<FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
							<p style={{ margin: '0 7.5%' }}>No 12, Ukpabi Asika Street,<br />Asokoro, Abuja</p>
						</div>
						<div className="contactInfo col-4">
							<FontAwesomeIcon icon={faEnvelope} size="lg" />
							<p style={{ margin: '0 7.5%' }}>info@sunsetdrive.ng</p>
						</div>
						<div className="contactInfo col-4">
							<FontAwesomeIcon icon={faPhone} size="lg" />
							<p style={{ margin: '0 7.5%' }}>0907 866 9414<br />0818 383 0793</p>
						</div>
					</div>

        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea name="text" id="text" placeholder="Enter your message" rows={6} defaultValue={""} />
            </div>

            <div className="col-12">
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
			</div>
		);
	}
}
