import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;

const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 0px;
`;

const Info = styled.h6`
  margin: 10px 0 20px 0;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const Data = styled.span`
  color: gray;
`;

const Content = styled.span`
  margin: 20px 0px;
`;

const FixedButtonContainer = styled.div`
  position: fixed;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FixedButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 3em;
  height: 8em;
  background-color: #f3eeee;
  color: black;
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
  &:hover {
    color: #888;
  }
  font-size: 25px;
  text-align: center;
`;

const Likes = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
`;

function MainPost({ post }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!post) {
    return null; // or show a loading indicator
  }

  return (
    <Container>
      <FixedButtonContainer>
        <FixedButton>
          <Icon icon={faHeart} />
          <Likes>{post.likes}</Likes>
          <Icon icon={faShareAlt} />
        </FixedButton>
      </FixedButtonContainer>
      <Title>{post.title}</Title>
      <Info>
        <UserName>{post.userName}</UserName> · <Data>{post.date}</Data>
      </Info>
      <img src={post.imageUrl} alt="Post" />
      <Content>{post.content}</Content>
    </Container>
  );
}

export default MainPost;
