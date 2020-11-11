import axios from "axios";
import { constants } from "./index.js";
import { fromJS } from "immutable";
import { cornflowerblue } from "color-name";

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  loginStatus: true
});

export const login = (account, password) => {
  return dispatch => {
    axios
      .get("/api/account.json?account=" + account + "&password=" + password)
      .then(res => {
        console.log(res);
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin());
        } else {
          console.log("failed");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const logout = () => ({
  type: constants.LOG_OUT,
  loginStatus: false
});
