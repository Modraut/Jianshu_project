import styled from "styled-components";
import logoPic from "../common/statics/logo.png"; //How to cide a picture
export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100px;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  background: url(${logoPic});
  background-size: contain;
`; // make the picture fix the space

export const Nav = styled.div`
  width: 945px;
  height: 100%;
  padding-right: 200px;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left; /*important*/

  .magnifier {
    /*the className of SearchWrapper's child*/
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    padding-left: 7px;
    box-sizing: border-box;
    line-height: 30px;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 250px;
  padding: 20px 20px 10px 20px;
  box-sizing: border-box;
  /* visibility: hidden; */
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchInfoTitle = styled.div`
  height: 20px;
  width: 210px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoRefresh = styled.span`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  .spin {
    display: block; /*so that the style would work*/
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.5s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a`
  float: left;
  /*so that the words will be inside the box but why*/
  display: block;
  margin: 0 10px 5px 0;
  line-height: 20px;
  padding: 0px 5px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 2px;
`;
export const NavSearch = styled.input.attrs({
  placeholder: "Search"
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px; /*reserve space for the icon*/
  box-sizing: border-box;
  border-radius: 19px; /*half of height*/
  border: 1px solid #eee;
  outline: none;
  margin-top: 9px; /*(56-38)/2*/
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.slide-enter {
    width: 160px;
  }
  &.slide-enter-active {
    width: 230px;
    transition: all 0.5s ease-in; /*the time for this change*/
  }
  &.slide-enter-done {
    width: 230px;
  }
  &.slide-exit {
    width: 230px;
  }
  &.slide-exit-active {
    width: 160px;
    transition: all 0.5s ease-in; /*the time for this change*/
  }
`;
export const Addition = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 56px;
`;
export const Button = styled.div`
  border-radius: 19px;
  border: 1px solid #ea6f5a;
  margin: 9px 20px 0 0;
  padding: 0 20px;
  box-sizing: border-box;
  float: right;
  line-height: 38px;
  font-size: 14px;
  &.signUp {
    color: #ea6f5a;
  }
  &.newEssay {
    background: #ea6f5a;
    color: #fff;
  }
`;
