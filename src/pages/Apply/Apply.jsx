import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useForm, FormProvider } from "react-hook-form";

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

  const { register, handleSubmit, watch, getValues } = useForm();
  const onSubmit = (data) => {
    applyRequest(data);
    console.log(data);
  };

  const methods = useForm({
    mode: "onChange",
  });

  const selectedCourse = watch("course");

  const groups = courses.find((course) => course.value.id === selectedCourse)
    ?.value.groups;

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
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="apply__form-first">
                <div className="apply__form-content">
                  <h5 className="apply__form-content-text">Course</h5>
                  <select
                    defaultValue={"default"}
                    className="apply__form-content-input"
                    {...register("course", { required: true })}
                  >
                    <option value={"default"} disabled>
                      Select...
                    </option>
                    {courses.map((course) => (
                      <option key={course.value.id} value={course.value.id}>
                        {course.display}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="apply__form-content">
                  <h5 className="apply__form-content-text">Group</h5>
                  <select
                    defaultValue={"default"}
                    className="apply__form-content-input"
                    {...register("group", { required: true })}
                  >
                    <option value={"default"} disabled>
                      Select...
                    </option>
                    {groups?.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.days.join("/")} {group.time} {group.mode}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="apply__form-second">
                <div className="apply__form-content">
                  <h5 className="apply__form-content-text">Full name</h5>
                  <input
                    className="apply__form-content-input"
                    type="text"
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
                    type="tel"
                    placeholder="(___)___-__-__"
                    {...register("Mobile number", {
                      required: true,
                      maxLength: 11,
                      minLength: 8,
                      // pattern:
                      // /^\(?([0-9]{3})\)([0-9]{3})[-]?([0-9]{2})[-]?([0-9]{2})$/,
                    })}
                  />
                </div>
              </div>
              <Button
                className="btn apply__form-btn"
                text="Apply"
                type="submit"
              />
            </form>
          </FormProvider>
        </div>
        <img className="apply__img" src={paints} alt="apply img" />
      </div>
    </div>
  );
};

export default Apply;
