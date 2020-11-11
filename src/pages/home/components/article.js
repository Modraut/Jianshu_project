import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ArticleItem, ArticleContent, LoadMore } from "../style.js";
import { actionCreators } from "../store/index.js";
import { Link } from "react-router-dom";
import faker from "faker";

class Article extends PureComponent {
  // article list
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          // console.log(item);
          return (
            <Link key={index} to={"/detail/" + item.get("id")}>
              <ArticleItem>
                <img className="pic" src={faker.image.fashion()} alt="" />
                <ArticleContent>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("content")}</p>
                </ArticleContent>
              </ArticleItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>Load More</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.get("home").get("articleList"),
  page: state.getIn(["home", "articlePage"])
});
const mapDispatchToProps = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
