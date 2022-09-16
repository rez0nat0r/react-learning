import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Button from "../../components/Button/Button";

import "./course.scss";

const Course = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.courses);
  const singleCourse = data.courses.find((props) => props.id === id) || {};

  return (
    <section className="course">
      <div className="container">
        <div className="course__main">
          <div className="course__body">
            <h1 className="course__body-title">{singleCourse.name}</h1>
            <div className="course__body-info">
              <p className="course__body-info-text">Level:</p>
              <p className="course__body-info-subtext">{singleCourse.level}</p>
            </div>
            <div className="course__body-info">
              <p className="course__body-info-text">Duration:</p>
              <p className="course__body-info-subtext">
                {singleCourse.duration} <br /> {singleCourse.periodicity}
              </p>
            </div>
            <div className="course__body-description">
              <h5 className="course__body-description-title">
                You will learn:
              </h5>
              <ul className="course__body-description-subtitle">
                <li className="course__body-description-subtitle-list">
                  {singleCourse.description_full}
                </li>
              </ul>
            </div>
            <div className="course__body-amount">
              <h4 className="course__body-amount-text">Price:</h4>
              <p className="course__body-amount-price">
                $ {singleCourse.price}
              </p>
            </div>
            <NavLink to="/apply">
              <Button className="btn course__btn" text="Apply now" />
            </NavLink>
          </div>
          <img
            className="course__img"
            src={singleCourse.full_img_url}
            alt="course img"
          />
        </div>
      </div>
    </section>
  );
};

export default Course;
