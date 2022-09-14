import coursesRequest from "../../services/coursesRequest";
import {
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILED,
  SELECTED_COURSE,
} from "../types/coursesTypes";

const getCoursesAction = () => (dispatch) => {
  return coursesRequest
    .getAllCourses()
    .then((res) =>
      dispatch({
        type: FETCH_COURSES_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: FETCH_COURSES_FAILED,
        payload: err.error,
      })
    );
};

const setSelectedCourse = (course) => (dispatch) => {
  return dispatch({
    type: SELECTED_COURSE,
    payload: course,
  });
};

export { getCoursesAction, setSelectedCourse };
