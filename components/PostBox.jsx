import React from "react";
import styled from "styled-components";
import Post from "./Post";
import PostFooter from "./PostFooter";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 40px;
`;

function PostBox({ posts, onClickPost }) {
  return (
    <MainContainer>
      <Post posts={posts} onClickPost={onClickPost} />
    </MainContainer>
  );
}

export default PostBox;
