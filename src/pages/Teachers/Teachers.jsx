import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchTeachers from "../../services/teachersRequest";

import Teacher from "../../components/Teacher";

import "./teachers.scss";

const Teachers = ({ teacherData, fetchTeachers }) => {
  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);
  return (
    <section className="teachers">
      <div className="container">
        <div className="teachers__body">
          <h1 className="teachers__body-title">Meet our great team!</h1>
          <div className="teachers__body-main">
            {teacherData.teachers.map((teach) => (
              <Teacher
                first_name={teach.first_name}
                last_name={teach.last_name}
                photo={teach.photo}
                courses={teach.courses}
                education={teach.education}
                about={teach.about}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    teacherData: state.teacher,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeachers: () => dispatch(fetchTeachers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teachers);
