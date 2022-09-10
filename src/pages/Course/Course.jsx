import { NavLink } from "react-router-dom";

import Button from "../../components/Button/Button";

import "./course.scss";
import course from "../../assets/images/course-photo.png";

const Course = () => {
  return (
    <section className="course">
      <div className="container">
        <div className="course__main">
          <div className="course__body">
            <h1 className="course__body-title">Basic Sketching</h1>
            <div className="course__body-info">
              <p className="course__body-info-text">Level:</p>
              <p className="course__body-info-subtext">Newbie</p>
            </div>
            <div className="course__body-info">
              <p className="course__body-info-text">Duration:</p>
              <p className="course__body-info-subtext">
                3 month <br /> 3 times per week
              </p>
            </div>
            <div className="course__body-description">
              <h5 className="course__body-description-title">
                You will learn:
              </h5>
              <ul className="course__body-description-subtitle">
                <li className="course__body-description-subtitle-list">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className="course__body-description-subtitle-list">
                  Sit iaculis fringilla sociis risus sodales in venenatis cras.
                </li>
                <li className="course__body-description-subtitle-list">
                  Non et, egestas phasellus semper egestas in.
                </li>
                <li className="course__body-description-subtitle-list">
                  Tristique donec lectus lobortis fringilla risus nunc, ipsum
                  eu.
                </li>
                <li className="course__body-description-subtitle-list">
                  Mi, suspendisse nulla sagittis etiam leo volutpat et
                  ullamcorper.
                </li>
              </ul>
            </div>
            <div className="course__body-amount">
              <h4 className="course__body-amount-text">Price:</h4>
              <p className="course__body-amount-price">$ 300</p>
            </div>
            <NavLink to="/apply">
              <Button className="btn course__btn" text="Apply now" />
            </NavLink>
          </div>
          <img className="course__img" src={course} alt="course img" />
        </div>
      </div>
    </section>
  );
};

export default Course;
