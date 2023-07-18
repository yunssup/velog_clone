import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import BodyButtons from '../components/BodyButtons';
import Header from '../components/header';
import MainPost from '../components/MainPost';
import PostBox from '../components/PostBox';
import { information } from "../components/information";
import { lightTheme, darkTheme } from "../components/themes";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    border-color: ${({ theme }) => theme.borderColor};
  }

  /* 다른 요소들의 전역 스타일 */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 0 20px;
  width: 95vw;
  overflow-x: hidden;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  border-color: ${({ theme }) => theme.borderColor};
`;

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [theme, setTheme] = useState(lightTheme);

  const handleClickPost = (postId) => {
    setSelectedPostId(postId);
  };

  const handleClickTitle = () => {
    setSelectedPostId(null);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  const selectedPost = information.find((post) => post.id === selectedPostId);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header onClickTitle={handleClickTitle} onToggleTheme={toggleTheme} />
        <BodyButtons/>
        {selectedPost ? (
          <MainPost post={selectedPost} />
        ) : (
          <PostBox posts={information} onClickPost={handleClickPost} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;