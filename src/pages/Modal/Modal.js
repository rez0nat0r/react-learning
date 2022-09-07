import React from "react";
import Button from "../../components/Button";

import "./Modal.scss";

import close__btn from "../../assets/icons/close-button.png";
import modal__img from "../../assets/images/modal.png";

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <section className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__main">
          <div className="modal__header">
            <img
              className="modal__header-close"
              src={close__btn}
              alt="close btn"
              onClick={onClose}
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
                    className="modal__body-text-email"
                    placeholder="E-mail"
                    defaultValue=""
                  />
                <Button className="btn modal__body-btn" text="Subscribe" />
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
