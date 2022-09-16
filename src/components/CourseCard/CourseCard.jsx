import React from "react";
import { useNavigate } from "react-router";

import Button from "../Button";

import "./courseCard.scss";

const CourseCard = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/course/${props.id}`);
      }}
    >
      <img
        className="card-img"
        src={props.thumbnail_img_url}
        alt="course img"
      />
      <div className="card__title">
        <h4 className="card__title-text">{props.name}</h4>
        <p className="card__title-price">$ {props.price}</p>
      </div>
      <div className="card__info">
        <p className="card__info-text">Level:</p>
        <p className="card__info-subtext">{props.level}</p>
      </div>
      <div className="card__info">
        <p className="card__info-text">Duration</p>
        <p className="card__info-subtext">
          {props.duration} <br /> {props.periodicity}
        </p>
      </div>
      <p className="card__subtitle">{props.description_short}</p>
      <Button className="btn card__btn" text="Apply" onClick={(e) => {
        e.stopPropagation();
        console.log(`test`);
        navigate(`/apply`);
      }}/>
    </div>
  );
};

export default CourseCard;
