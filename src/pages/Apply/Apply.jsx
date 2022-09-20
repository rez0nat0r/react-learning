import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useForm } from "react-hook-form";

import Button from "../../components/Button";

import fetchCourses from "../../services/coursesRequest";

import { setSelectedCourse } from "../../store/actions/coursesActions";
import applyRequest from "../../services/applyRequest";

import "./apply.scss";
import paints from "../../assets/images/paints.png";

const Apply = () => {
  const applyData = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (applyData.courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, [fetchCourses]);

  const courses = applyData.courses.map((course) => {
    return {
      value: course,
      display: course.name,
    };
  });

  const displayCourses = [{ value: null, display: "Select..." }].concat(
    courses
  );

  const [submit, setSubmit] = useState(false);

  const [course, setCourse] = useState(
    useSelector((state) => state.courses.selectedCourse)
  );
  const [group, setGroup] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [groups, setGroups] = useState([]);

  function setDataToState(e) {
    switch (e.target.name) {
      case "course":
        setCourse(e.target.value);
        break;
      case "group":
        setGroup(e.target.value);
        break;
      case "fullName":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  }

  function submit(event) {
    const userData = {
      courseId: course.id,
      groupId: group.id,
      full_name: name,
      email: email,
      phone: phone,
    };
    setSubmit(true);
    dispatch(setSelectedCourse(null));
    applyRequest(userData);
    event.preventDefault();
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};

  return (
    <div className="container">
      <div className="apply">
        <div className="apply__form">
          <h1 className="apply__form-title">
            Apply to desired course right away!
          </h1>
          <p className="apply__form-text">
            Select desired course and group, leave us your contact information
            and we’ll reach out to you for confirmation and letting you know
            about further steps
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="apply__form-first">
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Course</h5>
                <select
                  className="apply__form-content-input"
                  name="course" defaultValue={course} value={applyData.courses} onChange={(el) => { setCourse(el) }}
                  {...register("course", { required: true })}
                >
                  {displayCourses.map((course) => (
                    <option value={course.value}>{course.display}</option>
                  ))}
                </select>
              </div>
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Group</h5>
                <select
                  className="apply__form-content-input"
                  name="group" disabled={!course} value={groups}
                  onChange={(el) => setGroup(el)}
                  {...register("group", { required: true })}
                ></select>
              </div>
            </div>
            <div className="apply__form-second">
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Full name</h5>
                <input
                  className="apply__form-content-input"
                  type="text"
                  name="fullName"
                  value={name}
                  onChange={setDataToState}
                  {...register("Full name", {
                    required: true,
                    maxLength: 30,
                  })}
                />
              </div>
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">E-mail</h5>
                <input
                  className="apply__form-content-input"
                  type="text"
                  placeholder="email@email.com"
                  name="email"
                  value={email}
                  onChange={setDataToState}
                  {...register("Email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </div>
              <div className="apply__form-content">
                <h5 className="apply__form-content-text">Phone number</h5>
                <input
                  className="apply__form-content-input"
                  type="text"
                  value={phone}
                  onChange={setDataToState}
                  placeholder="(___)___-__-__"
                  {...register("Mobile number", {
                    required: true,
                    maxLength: 12,
                    minLength: 8,
                    pattern:
                      /^\(?([0-9]{3})\)([0-9]{3})[-]?([0-9]{2})[-]?([0-9]{2})$/,
                  })}
                />
              </div>
            </div>
            <Button
              className="btn apply__form-btn"
              text="Apply"
              type="submit"
              onClick={submit}
            />
          </form>
        </div>
        <img className="apply__img" src={paints} alt="apply img" />
      </div>
    </div>
  );
};

export default Apply;
