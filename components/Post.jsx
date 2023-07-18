import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const PostContainer = styled.div`
  width: 180px;
  margin: 20px;
  padding: 20px;
  background-color: black;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 10px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 100px;
`;

const PostInfo = styled.span`
  font-size: 8px;
  color: grey;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 5px;
`;

const PostFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid white;
  padding-top: 10px;
`;

const HeartIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: #888;
  }
  font-size: 15px;
  margin-right: 5px;
`;

function Post({ posts, onClickPost }) {
  return (
    <MainContainer>
      {posts.map((post) => (
        <PostContainer key={post.id} onClick={() => onClickPost(post.id)}>
          <PostImage src={post.imageUrl} alt="Post" />
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
          <PostInfo>
            {post.date}, {post.comment}
          </PostInfo>
          <PostFooter>
            <div>
              <ProfileImage src={post.profileImageUrl} alt="Post" />
              <span>by </span>
              {post.userName}
            </div>
            <div>
              <HeartIcon icon={faHeart} />
              {post.likes}
            </div>
          </PostFooter>
        </PostContainer>
      ))}
    </MainContainer>
  );
}

export default Post;
