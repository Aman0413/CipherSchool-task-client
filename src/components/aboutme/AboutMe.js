import React from "react";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="container aboutme-container">
        <div className="about-me-section">
          <h3>ABOUT ME</h3>
          <span>
            <button className="btn-primary">Edit</button>
          </span>
        </div>
        <div className="input-box">
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="Add something about you."
          ></textarea>
        </div>
        <div className="bottum-line">.</div>
      </div>
    </div>
  );
}

export default AboutMe;
