import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import "./index.css";

import { ReactComponent as Logo } from "../../pictures/anthony-logo.svg";
export const Nav = () => {
  const history = useHistory();

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Logo onClick={() => history.push("/")} />
        </div>
        <div className="link-container">
          <NavLink
            exact
            to="/"
            activeClassName="selected"
            className="link"
            id="portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="selected"
            className="link"
            id="about"
          >
            About Me
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
