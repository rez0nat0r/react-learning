import React from "react";
import Button from "../../componentsUniversal/button/Button";

import "./Modal.scss";

import close__btn from "../../assets/icons/close-button.png";
import modal__img from "../../assets/images/modal.png";

const Modal = ({show}) => {

    if (!show) {
        return null
    }

  return (
    <section className="modal">
      <div className="modal__content">
        <div className="modal__main">
          <div className="modal__header">
            <img
              className="modal__header-close"
              src={close__btn}
              alt="close btn"
            />
          </div>
          <div className="modal__body">
            <div className="modal__body-text">
              <h2 className="modal__body-text-title">
                Give us your email to stay tuned!
              </h2>
              <div className="modal__body-text-form">
                <input
                  type="email"
                  className="modal__email"
                  placeholder="E-mail"
                  defaultValue=""
                />
                <Button className="modal__body-btn"></Button>
              </div>
            </div>
            <div className="modal__footer">
              <p className="modal__footer-text">
                You always can undo that in any of your received emails
              </p>
            </div>
          </div>
        </div>
        <img className="modal__img" src={modal__img} alt="modal img" />
      </div>
    </section>
  );
};

export default Modal;
