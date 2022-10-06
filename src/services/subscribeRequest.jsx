import * as axios from "axios";

const { REACT_APP_HOST } = process.env;

const sendEmail = (inputValue) => {
  return axios
    .post(`${REACT_APP_HOST}/form/subscribe`, inputValue)
    .then(function (response) {
      console.log(response);
    });
};

export default sendEmail;
