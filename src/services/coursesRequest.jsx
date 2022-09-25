import {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesFailure,
} from "../store/actions/coursesActions";

import axios from "axios";

import { morphism } from "morphism";
import { coursesMorphism } from "./coursesMorphism";

const { REACT_APP_HOST } = process.env;

const fetchCourses = () => {
  return (dispatch) => {
    dispatch(fetchCoursesRequest);
    axios
      .get(`${REACT_APP_HOST}/courses`)
      .then(({ data }) => {
        const result = morphism(coursesMorphism, data);
        dispatch(fetchCoursesSuccess(result));
      })
      .catch(({ message }) => {
        dispatch(fetchCoursesFailure(message));
      });
  };
};

export default fetchCourses;
