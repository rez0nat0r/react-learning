import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchCourses from "../../services/coursesRequest";

import CourseCard from "../../components/CourseCard";

import "./courses.scss";

const Courses = ({ courseData, fetchCourses }) => {
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <section className="courses">
      <div className="container">
        <div className="courses__body">
          <h1 className="courses__body-title">Pick your perfect course!</h1>
          <div className="courses__body-main">
            {courseData.courses.map((course) => (
              <CourseCard
                thumbnail_img_url={course.thumbnail_img_url}
                name={course.name}
                price={course.price}
                level={course.level}
                duration={course.duration}
                periodicity={course.periodicity}
                description_short={course.description_short}
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
    courseData: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourses: () => dispatch(fetchCourses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
