import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo.png";
import Button from "../button/button";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <img className="header__img" src={logo} alt="logo-img" />
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item menu__item-header">
                <NavLink
                  to="/"
                  className="menu__link menu__link-header menu__link-first"
                >
                  Courses
                </NavLink>
              </li>
              <li class="menu__item">
                <NavLink
                  to="/"
                  className="menu__link menu__link-header menu__link-second"
                >
                  Teachers
                </NavLink>
              </li>
              <li class="menu__item">
                <NavLink
                  to="/"
                  className="menu__link menu__link-header menu__link-fourth"
                >
                  About us
                </NavLink>
              </li>
              <li class="menu__item">
                <Button className="header__button" text="Apply" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
