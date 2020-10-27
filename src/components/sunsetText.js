import React, { useState, useEffect } from "react";
import posters from '../images/posters.png';
import poster2 from '../images/poster2.png';

export default function(props) {

	const [width, setWidth] = useState(null);

	const breakpoint = 620;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('load', setWidth(window.innerWidth));
		window.addEventListener("resize", handleWindowResize);

		return () => window.removeEventListener("resize", handleWindowResize)
	}, []);
	
	const image = width > breakpoint ? posters : poster2;
   
  return (
    <div className="jumboRow">
      <div className="col-4 colFix">
        <p className="bigText">Most immersive viewing experience <b>EVER</b></p>
        <p className="smallText">
          This summer, for five weeks, we enjoyed summer of films and you were all amazing.  You arrived in DeLoreans for  Back to the Future, a Jurassic Park jeep and Cadillac as you boogied to Grease, rocked to Bohemian Rhapsody and sang along with Mamma Mia.
        </p>
        <p className="smallText">We saw glasses raised, tears shed and laughter shared as you all came together.</p>
        <p className="smallText">We hope we brought you a little bit of fun and escapism and cannot wait to welcome you again for our next season of films.
        </p>
      </div>
      <div className="col-6 colFix">
        <img src={image} className="sunsetImg" alt="poster"/>
      </div>
    </div>
  );
}