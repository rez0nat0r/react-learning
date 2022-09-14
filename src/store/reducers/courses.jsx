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

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        courses: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_COURSES_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: action.payload,
      };
      default: return state
  }
};

export default coursesReducer;