import { constants } from "./index.js";
import { fromJS } from "immutable";
import axios from "axios";
export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {
        console.log("Error");
      });
  };
};
const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  //if the key is not specified, it follows the source
  totalPage: Math.ceil(data.length / 10)
});
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
}); //return an object
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
export const pageChange = page => ({
  type: constants.PAGE_CHANGE,
  page: page
});
