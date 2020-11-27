import React from "react";
import { ReactComponent as EmailIcon } from "../../pictures/email.svg";
import { ReactComponent as LinkedInIcon } from "../../pictures/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../pictures/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../pictures/instagram.svg";
import { ReactComponent as DribbleIcon } from "../../pictures/dribble.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="icon-container" id="contact">
          <span>Contact</span>
          <a
            href="mailto: anthonyholder.ux@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon aria-label="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-holder-1a0975186"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon aria-label="linkedin" />
          </a>
        </div>
        <div className="icon-container" id="social">
          <span>Social</span>
          <a
            href="https://twitter.com/tonyholder_16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon aria-label="twitter" />
          </a>
          <a
            href="https://www.instagram.com/dejanon6/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon aria-label="instagram" />
          </a>
          <a
            href="https://dribbble.com/tonyholder16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DribbleIcon aria-label="dribble" />
          </a>
        </div>
      </div>
    </footer>
  );
};
