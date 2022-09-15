import {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesFailure,
} from "../store/actions/coursesActions";

import axios from "axios";

const { REACT_APP_HOST } = process.env;

// const coursesRequest = {
//   getAllCourses: () => {
//     return axios.get(`${REACT_APP_HOST}/courses`);
//   },
// };

const fetchCourses = () => {
  return (dispatch) => {
    dispatch(fetchCoursesRequest);
    axios
      .get(`${REACT_APP_HOST}/courses`)
      .then(({ data }) => {
        dispatch(fetchCoursesSuccess(data));
      })
      .catch(({ message }) => {
        dispatch(fetchCoursesFailure(message));
      });
  };
};

export default fetchCourses;