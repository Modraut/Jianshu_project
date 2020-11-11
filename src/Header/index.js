import { CSSTransition } from "react-transition-group";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store/index.js";
import { actionCreators as loginActionCreators } from "../pages/login/store/index.js";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoRefresh,
  SearchInfoItem,
  NavSearch,
  Addition,
  Button
} from "./style.js";

class Header extends PureComponent {
  searchBox() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handlePageChange
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            Top search
            <SearchInfoRefresh
              onClick={() => handlePageChange(page, totalPage, this.iconspin)}
              //onClick={handlePageChange(page,totalPage)}
            >
              <span
                ref={span => {
                  this.iconspin = span;
                }}
                className={"iconfont spin"}
              >
                &#xe851;
              </span>
              Refresh
            </SearchInfoRefresh>
          </SearchInfoTitle>
          <div>{pageList}</div>
        </SearchInfo>
      );
    } else return null;
  }
  render() {
    const {
      focused,
      list,
      handleInputFocus,
      handleInputBlur,
      loginStatus,
      logout
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">homepage</NavItem>
          <NavItem className="left">Download App</NavItem>
          {loginStatus ? (
            <NavItem onClick={logout} className="right">
              Log out
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">Sign in</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={500} //total animation time
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span
              className={
                focused ? "iconfont focused magnifier" : "iconfont magnifier"
              }
            >
              &#xe633;
            </span>
            {this.searchBox()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/essayWriting">
            <Button className="newEssay">
              <span className="iconfont">&#xe617;</span>
              New essay
            </Button>
          </Link>
          <Button className="signUp">Sign up</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    // focused: state.get('header').get('focused'),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    loginStatus: state.getIn(["login", "loginStatus"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      //so only send the request once
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handlePageChange(page, totalPage, spin) {
      if (page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1));
      } else dispatch(actionCreators.pageChange(1));
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
