import axios from "axios";

const { REACT_APP_HOST } = process.env;

const applyRequest = (userData) => {
  return axios.post(`${REACT_APP_HOST}/form/apply`, userData);
};

export default applyRequest;
