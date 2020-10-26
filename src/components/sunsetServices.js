import React, { useEffect } from 'react';

export default function(props) {

	useEffect(() => {

		let viewHeight = (window.innerHeight || document.documentElement.clientHeight);
		const elem1 = document.querySelector(".cont1");
		const elem2 = document.querySelector(".cont2");
		const elem3 = document.querySelector(".cont3");

		const elemArray = [ elem1, elem2, elem3 ];

		window.addEventListener('scroll', function() {

			elemArray.forEach((el) => {

				let rect = el.getBoundingClientRect();

				if (viewHeight > rect.bottom) {
					el.classList.add("serviceAnimate")
				}
			})
		})
  }, []);

	return (
		<div className="serviceGrid col-11 colFix" style={{ margin: 'auto' }}>
			<div className="col-6 colFix cont1" style={{ position: 'relative', padding: 0 }}>
				<div className="serviceBG">
					<div className="serviceImg"></div>
				</div>
				<div className="serviceCont">
					<h2>Outdoor Entertainment</h2>
					<p className="serviceText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit.</p>
				</div>
			</div>

			<div className="col-5 colFix cont2" style={{ position: 'relative', padding: 0 }}>
				<div className="serviceBG">
					<div className="serviceImg"></div>
				</div>
				<div className="serviceCont2">
					<h2>Food and Drinks</h2>
					<p className="serviceText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit.</p>
				</div>
			</div>

			<div className="col-6 colFix cont3" style={{ position: 'relative', padding: 0 }}>
				<div className="serviceBG">
					<div className="serviceImg"></div>
				</div>
				<div className="serviceCont3">
					<h2>Private Screenings</h2>
					<p className="serviceText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit.</p>
				</div>
			</div>
		</div>
	);
}
