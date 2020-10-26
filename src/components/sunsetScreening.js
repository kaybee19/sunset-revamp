import React, { Component } from "react";
import { Link } from "gatsby"
import HrLine from "../components/hrLine"
import posters from '../images/posters.png'
import { logo1, logo2, logo3, logo4, logo5, logo6 } from "../images/logos"

export default class sunsetScreening extends Component {

  render() {
    
    return (
      <div className="screenBG">
        <div className="col-7 colFix" style={{ margin: 'auto' }}>
          <p className="bigText noodleText">UPCOMING SCREENINGS</p>
          <p className="smallText">This summer, for five weeks, we enjoyed summer of films and you were all amazing.  You arrived in DeLoreans for  Back to the Future, a Jurassic Park jeep and Cadillac as you boogied to Grease, rocked to Bohemian Rhapsody and sang along with Mamma Mia. We saw glasses raised, tears shed and laughter shared as you all came together. We hope we brought you a little bit of fun and escapism and cannot wait to welcome you again for our next season of films.</p>
          <Link to={`/contact#message`}>
            <button className="sunsetButton">Schedule A Screening</button>
          </Link>
        </div>
        <HrLine />
        <div className="row img-row">
          <div className="img-col">
            <img src={logo1} alt=""/>
          </div>
          <div className="img-col">
            <img src={logo2} alt=""/>
          </div>
          <div className="img-col">
            <img src={logo3} alt=""/>
          </div>
          <div className="img-col">
            <img src={logo4} alt=""/>
          </div>
          <div className="img-col">
            <img src={logo5} alt=""/>
          </div>
          <div className="img-col">
            <img src={logo6} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}