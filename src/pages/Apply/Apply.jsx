import React from "react";
import { useForm } from "react-hook-form";

import Button from "../../components/Button";

import "./apply.scss";
import paints from "../../assets/images/paints.png";

const Apply = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };
  console.log(errors);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="apply__form-first">
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Course</h5>
                <select
                  className="apply__form-content-input"
                  {...register("Course", { required: true })}
                >
                  <option selected disabled value="Select...">
                    Select...
                  </option>
                  <option value="Basic Sketching">Basic Sketching</option>
                  <option value="Watercolor Basics">Watercolor Basics</option>
                  <option value="Digital Sketching">Digital Sketching</option>
                  <option value="Some other stuff">Some other stuff</option>
                </select>
              </div>
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Group</h5>
                <select
                  className="apply__form-content-input"
                  {...register("Schedule", { required: true })}
                >
                  <option selected disabled value="Select...">
                    Select...
                  </option>
                  <option value="mon/wed/fri 7pm-9pm">
                    mon/wed/fri 7pm-9pm
                  </option>
                  <option value="mon/wed/fri 7pm-9pm">
                    mon/wed/fri 7pm-9pm
                  </option>
                  <option value="mon/wed/fri 7pm-9pm">
                    mon/wed/fri 7pm-9pm
                  </option>
                  <option value="mon/wed/fri 7pm-9pm">
                    mon/wed/fri 7pm-9pm
                  </option>
                </select>
              </div>
            </div>
            <div className="apply__form-second">
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Full name</h5>
                <input
                  className="apply__form-content-input"
                  type="text"
                  {...register("Full name", {
                    required: true,
                    maxLength: 30,
                  })}
                />
              </div>
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">E-mail</h5>
                <input
                  className="apply__form-content-input"
                  type="text"
                  placeholder="email@email.com"
                  {...register("Email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </div>
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Phone number</h5>
                <input
                  className="apply__form-content-input"
                  type="text"
                  placeholder="(___)___-__-__"
                  {...register("Mobile number", {
                    required: true,
                    maxLength: 12,
                    minLength: 10,
                    pattern:
                      /^\(?([0-9]{3})\)([0-9]{3})[-]?([0-9]{2})[-]?([0-9]{2})$/,
                  })}
                />
              </div>
            </div>
              <Button
                className="btn apply__form-btn"
                text="Apply"
                type="submit"
              />
          </form>
        </div>
        <img className="apply__img" src={paints} alt="apply img" />
      </div>
    </div>
  );
};

export default Apply;
