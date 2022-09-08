import React, { useState } from "react";
import Button from "../../components/Button";

import "./apply.scss";
import paints from "../../assets/images/paints.png";

const Apply = () => {
  const [confirmation, setConfirmation] = useState(false);

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
                <h5>Course</h5>
                <input type="text" placeholder="Select" />
              </div>
              <div className="apply__form-content">
                <h5>Group</h5>
                <input type="text" placeholder="Select" />
              </div>
            </div>
            <div className="apply__form-second">
              <div className="apply__form-content">
                <h5>Full name</h5>
                <input type="text" placeholder="Select" />
              </div>
              <div className="apply__form-content">
                <h5>E-mail</h5>
                <input type="text" placeholder="Select" />
              </div>
              <div className="apply__form-content">
                <h5>Phone number</h5>
                <input type="text" placeholder="Select" />
              </div>
            </div>
          </form>
          <Button className="btn apply__form-btn" text="Apply" />
        </div>
        <img className="apply__img" src={paints} alt="apply img" />
      </div>
    </div>
  );
};

export default Apply;
