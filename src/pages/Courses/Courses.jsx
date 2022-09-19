import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchCourses from "../../services/coursesRequest";

import CourseCard from "../../components/CourseCard";

import "./courses.scss";

const Courses = () => {
  const courseData = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (courseData.courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, [fetchCourses]);

  return (
    <section className="courses">
      <div className="container">
        <div className="courses__body">
          <h1 className="courses__body-title">Pick your perfect course!</h1>
          <div className="courses__body-main">
            {courseData.courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
