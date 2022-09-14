import axios from "axios";

const REACT_APP_HOST = process.env

const coursesRequest = {
  getAllCourses: () => {
    return axios.get(`${REACT_APP_HOST}/courses`);
  },
};

export default coursesRequest;
