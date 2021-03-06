import React from "react";
import aboutimage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>Upcoming Event</h1>
        <p>
          Celebrate the special moments of your life with a good quality cake
          and make the day special.
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
}

export default About;
