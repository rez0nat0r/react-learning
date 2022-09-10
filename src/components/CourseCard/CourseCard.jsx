import { NavLink } from "react-router-dom";

import Button from "../Button";

import "./courseCard.scss";
import card from "../../assets/images/CourseCard.png";

const CourseCard = () => {
  return (
    <section className="card">
      <img className="card-img" src={card} alt="course img" />
      <div className="card__title">
        <h4 className="card__title-text">Basic sketching</h4>
        <p className="card__title-price">$ 300</p>
      </div>
      <div className="card__info">
        <p className="card__info-text">Level:</p>
        <p className="card__info-subtext">Newbie</p>
      </div>
      <div className="card__info">
        <p className="card__info-text">Duration</p>
        <p className="card__info-subtext">
          3 month <br /> 3 times per week
        </p>
      </div>
      <p className="card__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec
        odio pulvinar...
      </p>
      <NavLink to="/course">
        <Button className="btn card__btn" text="Apply" />
      </NavLink>
    </section>
  );
};

export default CourseCard;
