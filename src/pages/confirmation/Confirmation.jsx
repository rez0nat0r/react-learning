import React from "react";

import confirmation from '../../assets/images/confirmation.png';
import Button from "../../componentsUniversal/button/Button";

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
            Check your mailbox. There should be a confirmation letter. We’ll
            contact you soon to give you info about next steps
          </p>
          <Button className="confirmation__body-btn" text="Back to Home"/>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
