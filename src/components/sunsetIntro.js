import React from "react";
import ScrollspyNav from "react-scrollspy-nav";

export default class sunsetIntro extends React.Component {
	render() {
		return (

			<div id="hero" >
				<div id="heroCont" className="heroCont">
					<div className="tint"></div>
					<div className="scrollClass">
			        <ScrollspyNav
			          scrollTargetIds={["site-main"]}
			          activeNavClass="is-active"
			        >
			          <ul>
			            <li style={{ listStyle: 'none' }}>
			            	<a href="#site-main" className="scrollBtn">Continue</a>
			           	</li>
			          </ul>
			        </ScrollspyNav>
					</div>
				</div>
			</div>

		);
	}
}
