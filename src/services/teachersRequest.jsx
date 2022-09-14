import {
  fetchTeachersRequest,
  fetchTeachersSuccess,
  fetchTeachersFailure,
} from "../store/actions/teacherActions";

import axios from "axios";

const {REACT_APP_HOST} = process.env;

const fetchTeachers = () => {
  return (dispatch) => {
    dispatch(fetchTeachersRequest);
    axios
      .get(`${REACT_APP_HOST}/teachers`)
      .then(({ data }) => {
        dispatch(fetchTeachersSuccess(data));
      })
      .catch(({ message }) => {
        dispatch(fetchTeachersFailure(message));
      });
  };
};

export default fetchTeachers;
