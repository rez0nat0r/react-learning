import {
  FETCH_TEACHERS_REQUEST,
  FETCH_TEACHERS_SUCCESS,
  FETCH_TEACHERS_FAILURE,
} from "../types/teachersTypes";

const initialState = {
  loading: false,
  teachers: [],
  error: "",
};

const teacherReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_TEACHERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TEACHERS_SUCCESS:
      return {
        loading: false,
        teachers: payload,
        error: "",
      };
    case FETCH_TEACHERS_FAILURE:
      return {
        loading: false,
        teachers: [],
        error: payload,
      };
    default:
      return state;
  }
};

export default teacherReducer;
