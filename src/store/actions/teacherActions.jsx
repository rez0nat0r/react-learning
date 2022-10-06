import {
  FETCH_TEACHERS_REQUEST,
  FETCH_TEACHERS_SUCCESS,
  FETCH_TEACHERS_FAILURE,
} from "../types/teachersTypes";

const fetchTeachersRequest = () => {
  return { type: FETCH_TEACHERS_REQUEST };
};

const fetchTeachersSuccess = (teachers) => {
  return {
    type: FETCH_TEACHERS_SUCCESS,
    payload: teachers,
  };
};

const fetchTeachersFailure = (error) => {
  return {
    type: FETCH_TEACHERS_FAILURE,
    payload: error,
  };
};

export { fetchTeachersRequest, fetchTeachersSuccess, fetchTeachersFailure };
