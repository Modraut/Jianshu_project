import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <div>
        <TopicWrapper>
          {list.map((item) => {
            return (
              <TopicItem key={item.get("id")}>
                <img className="topicPic" src={item.get("imgURL")} alt="" />
                {item.get("title")}
              </TopicItem>
            );
          })}
        </TopicWrapper>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  list: state.get("home").get("topicList")
});
export default connect(mapStateToProps, null)(Topic);
