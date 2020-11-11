import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { HomeWrapper, HomeLeft, HomeRight } from "./style.js";
import Article from "./components/article.js";
import Topic from "./components/topic.js";
import Recommend from "./components/recommend.js";
import Writers from "./components/writers.js";
import { actionCreators } from "./store/index.js";
import { BackTop } from "./style.js";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            alt=""
          />
          <Topic />
          <Article />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          {/* <Writers /> */}
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>To Top</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.scrollData);
  }
  bindEvent() {
    window.addEventListener("scroll", this.props.scrollData);
  }
}
const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});
const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  scrollData() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleScrollShow(true));
    } else {
      dispatch(actionCreators.toggleScrollShow(false));
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home);
