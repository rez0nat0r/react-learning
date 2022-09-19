import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTeachers from "../../services/teachersRequest";

import Teacher from "../../components/Teacher";

import "./teachers.scss";

const Teachers = () => {
  const teacherData = useSelector((state) => state.teacher)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [fetchTeachers]);
  return (
    <section className="teachers">
      <div className="container">
        <div className="teachers__body">
          <h1 className="teachers__body-title">Meet our great team!</h1>
          <div className="teachers__body-main">
            {teacherData.teachers.map((teach) => (
              <Teacher key={teach.id} {...teach} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
