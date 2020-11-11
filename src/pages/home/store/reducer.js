// import { constants } from "./index.js";
import { fromJS } from "immutable";
import * as constants from "./constants.js";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: true
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicLIst: fromJS(action.topicLIst),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
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
