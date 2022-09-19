import React from "react";

import "./teacher.scss";

const Teacher = ({
  photo,
  first_name,
  last_name,
  courses,
  education,
  about,
}) => {
  return (
    <section className="teacher">
      <img className="teacher__photo" src={photo} alt="teacher img" />
      <h3 className="teacher__name">
        {first_name} {last_name}
      </h3>
      <div className="teacher__info">
        <h5 className="teacher__info-title">Courses:</h5>
        <p className="teacher__info-text">{courses}</p>
      </div>
      <div className="teacher__info">
        <h5 className="teacher__info-title">Education:</h5>
        <p className="teacher__info-text">{education}</p>
      </div>
      <div className="teacher__info">
        <h5 className="teacher__info-title">About me:</h5>
        <p className="teacher__info-text">{about}</p>
      </div>
    </section>
  );
};

export default Teacher;
