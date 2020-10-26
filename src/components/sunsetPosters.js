import React from "react";
import { bg1, bg2, bg3, bg4, bg5, bg6, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 } from "../images/posters"

export default function(props) {

  const posterIndex = [
    {text1: 'Spiderman: Homecoming', backg1: bg1, text2: 'Get Out', backg2: bg1, img1: img1, img2: img2},
    {text1: 'IT', backg1: bg2, text2: 'Toy Story 4', backg2: bg2, img1: img3, img2: img4},
    {text1: 'Wonder Woman', backg1: bg3, text2: 'The Lion King', backg2: bg3, img1: img5, img2: img6},
    {text1: 'Joker', backg1: bg4, text2: 'John Wick: Chapter 3', backg2: bg4, img1: img7, img2: img8},
    {text1: 'Titanic', backg1: bg5, text2: 'Beauty And The Beast', backg2: bg5, img1: img9, img2: img10},
    {text1: 'Baby Driver', backg1: bg6, text2: 'Trading Places', backg2: bg6, img1: img11, img2: img12},
  ];

  const posterFlip = (index) => {
    let check = document.getElementsByClassName('is-flipped');
    let poster = document.getElementsByClassName('posterBG')[index];
    poster.addEventListener( 'click', function() {
      if (check)
      poster.classList.toggle('is-flipped');
    })
  };

  return (
    <div className="row posterGrid" style={{ justifyContent: 'center' }}>
      <h2>Popular Screenings</h2>
      <div className="col-10 colFix row">
        {posterIndex.map((poster, index) => (
          <div key={index} className="col-4 posterBG"
          onClick={() => {
            posterFlip(index)
          }}>
            <div className="posterClass posterItem1" style={{ transform: 'rotateY(0deg)' }}>
              <img src={poster.backg1} alt="movie-poster" className="posterBImg" />
              <img src={poster.img1} alt="movie" className="posterImg" />
              <h2 className="posterText">{poster.text1}</h2>
            </div>
            <div className="posterClass posterItem2">
              <img src={poster.backg2} alt="movie-poster" className="posterBImg posterImg2" />
              <img src={poster.img2} alt="movie" className="posterImg posterImg2" />
              <h2 className="posterText">{poster.text2}</h2>
            </div>
          </div>
          ))
        }
      </div>
   </div>
  )
};