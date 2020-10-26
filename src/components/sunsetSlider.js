import React, { Component } from "react";
import Slider from "react-slick";
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11 } from '../images/carousel'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class sunsetSlider extends Component {

  render() {

  	const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11 ]

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500,
      arrows: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    
    return (
      <div>
        <Slider {...settings}>
        {images.map((img, index) => (
        	<div key={index}>
        		<div className="carouselCont">
        			<div className="carouselItem">
        				<img src={img} alt="carousel1"/>
        			</div>
        		</div>
        	</div>
        ))
        }
       </Slider>
      </div>
    );
  }
}