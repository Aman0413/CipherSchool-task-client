import React from "react";
import "./ProfessionalInfo.scss";

function ProfessionalInfo() {
  return (
    <div className="ProfessionalInfo">
      <div className="container">
        <div className="info-header">
          <h3>PROFESSIONAL INFORMATION</h3>
          <button className="btn-primary">Edit</button>
        </div>
        <div className="category-box">
          <div className="education">
            Highest education
            <select name="" id="">
              <option value="Graducation">Graducation</option>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
            </select>
          </div>
          <div className="occupation">
            What do you do currently?
            <select name="" id="">
              <option value="College Student">College Student</option>
              <option value="College Student">College Student</option>
              <option value="Teaching">Teaching</option>
              <option value="Job">Job</option>
              <option value="Freelancing">Freelancing</option>
            </select>
          </div>
        </div>
        <div className="outline">.</div>
      </div>
    </div>
  );
}

export default ProfessionalInfo;
