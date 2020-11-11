import { fromJS } from "immutable";
import * as constants from "./constants.js";

const defaultState = fromJS({
  title: "",
  content: ""
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL_DATA:
      return state.merge({
        title: action.title,
        content: action.content
      });
    case constants.GET_MORE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.page
      });
    case constants.TOGGLE_SCROLL_SHOW:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
