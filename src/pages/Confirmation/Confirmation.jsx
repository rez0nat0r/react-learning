import React from "react";
import { NavLink } from "react-router-dom";

import "./confirmation.scss";
import confirmation from "../../assets/images/confirmation.png";
import Button from "../../components/Button";

const Confirmation = () => {
  return (
    <section className="confirmation">
      <div className="container">
        <div className="confirmation__body">
          <img
            className="confirmation__body-img"
            src={confirmation}
            alt="confirmation img"
          />
          <h3 className="confirmation__body-title">Thank you!</h3>
          <p className="confirmation__body-text">
            Check your mailbox. There should be a confirmation letter.
            <br /> We’ll contact you soon to give you info about next steps
          </p>
          <NavLink to="/">
            <Button
              className="btn confirmation__body-btn"
              text="Back to Home"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
