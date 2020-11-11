import axios from "axios";
import { constants } from "./index.js";
import { fromJS } from "immutable";

const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});
export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};
const getHomeData = (result, nextPage) => ({
  type: constants.GET_MORE_LIST,
  list: fromJS(result),
  articlePage: nextPage
});
export const getMoreList = page => {
  return dispatch => {
    axios.get("/api/homeList.json?page=" + page).then(res => {
      const result = res.data.data;
      dispatch(getHomeData(result, page + 1));
    });
  };
};
export const toggleScrollShow = show => ({
  type: constants.TOGGLE_SCROLL_SHOW,
  show: show
});
