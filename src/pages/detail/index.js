import React, { Component } from "react";
import { DetailWrapper, Content, Header } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom";

class Detail extends Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
  render() {
    const { title, content } = this.props;
    console.log(this.props.match.params.id);
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    );
  }
}
const mapState = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
  id: state.getIn(["detail", "id"])
});
const mapDispatch = dispatch => ({
  getDetail(id) {
    const action = actionCreators.getDetail(id);
    dispatch(action);
  }
});
export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail));
