import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../../components/Button";

import "./apply.scss";
import paints from "../../assets/images/paints.png";

const Apply = () => {
  return (
    <div className="container">
      <div className="apply">
        <div className="apply__form">
          <h1 className="apply__form-title">
            Apply to desired course right away!
          </h1>
          <p className="apply__form-text">
            Select desired course and group, leave us your contact information
            and we’ll reach out to you for confirmation and letting you know
            about further steps
          </p>
          <form>
            <div className="apply__form-first">
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Course</h5>
                <select className="apply__form-content-input">
                  <option selected value="grapefruit">
                    Basic Sketching
                  </option>
                  <option value="lime">Watercolor Basics</option>
                  <option value="coconut">Digital Sketching</option>
                  <option value="mango">Some other stuff</option>
                </select>
              </div>
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Group</h5>
                <select className="apply__form-content-input">
                  <option selected value="grapefruit">
                    mon/wed/fri 7pm-9pm
                  </option>
                  <option value="lime">mon/wed/fri 7pm-9pm</option>
                  <option value="coconut">mon/wed/fri 7pm-9pm</option>
                  <option value="mango">mon/wed/fri 7pm-9pm</option>
                </select>
              </div>
            </div>
            <div className="apply__form-second">
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Full name</h5>
                <input
                  className="apply__form-content-input"
                  type="text"
                  name="name"
                />
              </div>
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">E-mail</h5>
                <input
                  className="apply__form-content-input"
                  type="text"
                  name="email"
                  placeholder="email@email.com"
                />
              </div>
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Phone number</h5>
                <input
                  className="apply__form-content-input"
                  type="text"
                  name="phone"
                  placeholder="(___)___-__-__"
                />
              </div>
            </div>
          </form>
          <NavLink to="/confirmation">
            <Button className="btn apply__form-btn" text="Apply" />
          </NavLink>
        </div>
        <img className="apply__img" src={paints} alt="apply img" />
      </div>
    </div>
  );
};

export default Apply;
