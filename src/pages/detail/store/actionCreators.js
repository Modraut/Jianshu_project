import axios from "axios";
import { constants } from "./index.js";

export const getDetail = id => {
  return dispatch => {
    axios.get("/api/detail.json?id=" + id).then(res => {
      const result = res.data.data;
      const detail = {
        type: constants.CHANGE_DETAIL_DATA,
        title: result.title,
        content: result.content,
        id: result.id
      };
      dispatch(detail);
    });
  };
};
