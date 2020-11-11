import React, { PureComponent } from "react";
// import {} from "./style";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class EssayWriting extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return <div>Writing your own essay</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}
const mapState = state => ({
  loginStatus: state.getIn(["login", "loginStatus"])
});
const mapDispatch = dispatch => ({});
export default connect(
  mapState,
  mapDispatch
)(EssayWriting);
