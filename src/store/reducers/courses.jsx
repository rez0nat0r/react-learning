import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILED,
  SELECTED_COURSE,
} from "../types/coursesTypes";

const initialState = {
  loading: false,
  courses: [],
  error: "",
};

const coursesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        courses: payload,
        loading: false,
        error: "",
      };
    case FETCH_COURSES_FAILED:
      return {
        ...state,
        error: payload,
      };
    case SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: payload,
      };
      default: return state
  }
};

export default coursesReducer;