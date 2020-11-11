// import { constants } from "./index.js";
import { fromJS } from "immutable";
import * as constants from "./constants.js";

const defaultState = fromJS({
  loginStatus: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.merge({
        loginStatus: action.loginStatus
      });
    case constants.LOG_OUT:
      return state.merge({
        loginStatus: action.loginStatus
      });
    default:
      return state;
  }
};
