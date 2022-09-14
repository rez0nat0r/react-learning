import React from 'react';

import "./teacher.scss";

const Teacher = (props) => {
  return (
    <section className="teacher">
      <img className="teacher__photo" src={props.photo} alt="teacher img" />
      <h3 className="teacher__name">{props.first_name} {props.last_name}</h3>
      <div className="teacher__info">
        <h5 className="teacher__info-title">Courses:</h5>
        <p className="teacher__info-text">
          {props.courses}
        </p>
      </div>
      <div className="teacher__info">
        <h5 className="teacher__info-title">Education:</h5>
        <p className="teacher__info-text">
          {props.education}
        </p>
      </div>
      <div className="teacher__info">
        <h5 className="teacher__info-title">About me:</h5>
        <p className="teacher__info-text">
          {props.about}
        </p>
      </div>
    </section>
  );
};

export default Teacher;
