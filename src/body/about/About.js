import React from "react";
import "./index.css";
import anthonyImage from "../../pictures/anthonyImage.png";

export const About = () => {
  return (
    <div className="about-container">
      <img src={anthonyImage} alt="Anthony Holder" />
      <div className="about-details-container">
        <div className="my-details-header">
          <h4>I'm Anthony Holder</h4>
          <hr />
        </div>
        <div className="my-details-info">
          <p>
            I grew up with a passion for art, comic books, and technology. In
            2019 I joined the Lambda UX Design program to gain more knowledge
            and experience in the field.
          </p>
          <p>
            My transition from artist to UX designer has been a fun and
            challenging one. My new skills and mindset of helping users allow me
            to create designs that are modern and functional.
          </p>
          <p>
            In my free time, I enjoy drawing, listen to music, play video games,
            and watch football (soccer).
          </p>
        </div>
      </div>
    </div>
  );
};
