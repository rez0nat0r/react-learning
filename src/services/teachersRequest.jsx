import {
  fetchTeachersRequest,
  fetchTeachersSuccess,
  fetchTeachersFailure,
} from "../store/actions/teacherActions";

import axios from "axios";

import { morphism } from "morphism";
import { teachersMorphism } from "./teachersMorphism";

const { REACT_APP_HOST } = process.env;

const fetchTeachers = () => {
  return (dispatch) => {
    dispatch(fetchTeachersRequest);
    axios
      .get(`${REACT_APP_HOST}/teachers`)
      .then(({ data }) => {
        const result = morphism(teachersMorphism, data);
        dispatch(fetchTeachersSuccess(result));
      })
      .catch(({ message }) => {
        dispatch(fetchTeachersFailure(message));
      });
  };
};

export default fetchTeachers;
