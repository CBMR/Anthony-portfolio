import React from "react";
import "./index.css";
import anthonyDrawn from "../../pictures/anthonyDrawn.png";
import fitnessPreview from "../../pictures/fitnessPreview.png";

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div>
        <div className="details-container">
          <div className="info">
            <h1>Anthony Holder</h1>
            <hr />
            <p>
              I’m a UX/UI designer from Panama, living in Cincinnati. I have a
              creative and curious mind and a love for art, design, and
              technology.
            </p>
          </div>
          <img src={anthonyDrawn} alt="drawn selfie" />
        </div>
        <div className="projects-container">
          <h1>Projects</h1>
          <div className="projects">
            <div className="project" id="anywhere-fitness">
              <img src={fitnessPreview} alt="Anywhere Fitness Preview" />
              <div className="project-info">
                <h3>Anywhere Fitness</h3>
                <hr />
                <p>
                  An app that connects users to fitness classes hosted by local
                  instructors.
                </p>
                <button className="view-study">View Case Studies</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
