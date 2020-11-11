import React, { PureComponent } from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Redirect } from "react-router";

class Login extends PureComponent {
  render() {
    const { login, loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="Account"
              ref={input => (this.account = input)}
            />
            <Input
              placeholder="Password"
              ref={input => (this.password = input)}
            />
            <Button
              onClick={() => login(this.account.value, this.password.value)}
              type="submit"
            >
              Log in
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
const mapState = state => ({
  loginStatus: state.getIn(["login", "loginStatus"])
});
const mapDispatch = dispatch => ({
  // getDetail(id) {
  //   const action = actionCreators.getDetail(id);
  //   dispatch(action);
  // }
  login(account, password) {
    // dispatch(actionCreators.login(account, password))
    // console.log(account, password);
    dispatch(actionCreators.login(account, password));
  }
});
export default connect(
  mapState,
  mapDispatch
)(Login);
