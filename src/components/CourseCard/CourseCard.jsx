import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import Button from "../Button";

import "./courseCard.scss";

const CourseCard = ({
  id,
  thumbnailImgUrl,
  name,
  price,
  level,
  duration,
  periodicity,
  descriptionShort,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/course/${id}`);
      }}
    >
      <img className="card-img" src={thumbnailImgUrl} alt="course img" />
      <div className="card__title">
        <h4 className="card__title-text">{name}</h4>
        <p className="card__title-price">$ {price}</p>
      </div>
      <div className="card__info">
        <p className="card__info-text">Level:</p>
        <p className="card__info-subtext">{level}</p>
      </div>
      <div className="card__info">
        <p className="card__info-text">Duration</p>
        <p className="card__info-subtext">
          {duration} <br /> {periodicity}
        </p>
      </div>
      <p className="card__subtitle">{descriptionShort}</p>
      <NavLink to="/apply">
        <Button className="btn card__btn" text="Apply" />
      </NavLink>
    </div>
  );
};

export default CourseCard;
