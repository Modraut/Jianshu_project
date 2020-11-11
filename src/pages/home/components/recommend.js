import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../style.js";

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map(item => (
          <RecommendItem key={item.get("id")} imgURL={item.get("imgURL")} font={item.get("font")}>
            {item.get("title")}
          </RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}
const mapStateToProps = state => ({
  list: state.get("home").get("recommendList")
});
export default connect(
  mapStateToProps,
  null
)(Recommend);

// export default Recommend;
