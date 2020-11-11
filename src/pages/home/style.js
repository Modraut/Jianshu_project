import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px .banner-img {
    width: 300px;
    height: 200px;
  }
`;
export const HomeRight = styled.div`
  float: right;
  width: 280px;
  margin: 0 auto;
  height: 300px;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  /*important*/
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  /*important*/
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  padding-right: 18px;
  background: #fab84f;
  width: 100%;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topicPic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
export const ArticleItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ArticleContent = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 18px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  color: ${(props) => props.font};
  /* color: white; */
  border-radius: 13px;
  padding-left: 15px;
  width: 280px;
  height: 50px;
  line-height: 50px;
  background: ${(props) => props.imgURL};
  background-size: contain;

`;
export const LoadMore = styled.div`
  background: #a5a5a5;
  height: 40px;
  line-height: 40px;
  margin: 35px 0;
  border-radius: 20px;
  width: 100%;
  text-align: center; //
  color: #fff;
  cursor: pointer;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ccc;
  text-align: center;
`;
