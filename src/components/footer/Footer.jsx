import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__content-text">
            © Simple Art,Inc.2021
            <br />
            All rights reserved
          </p>
          <nav className="menu__footer">
            <ul className="menu__footer-list">
              <li className="menu__footer-item">
              <NavLink
                  to="/"
                  className="menu__footer-link"
                >
                  Terms
                </NavLink>
              </li>
              <li className="menu__footer-item">
              <NavLink
                  to="/"
                  className="menu__footer-link"
                >
                  Privacy policy
                </NavLink>
              </li>
              <li className="menu__footer-item">
              <NavLink
                  to="/"
                  className="menu__footer-link"
                >
                  Help & Support
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;