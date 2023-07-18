import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Head = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  z-index: 9999;
  /* add other styles */
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex;
  margin-left: 20px;
  font-size: 16px;
  text-decoration: none;
  color: #ffffff;
`;
const SunIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: #888;
  }
  font-size: 25px;
  color: ${({ theme }) => theme.color};
  margin-right: 20px;
`;


const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: ${({ theme }) => theme.color};
  margin-right:20px ;
  margin-left:20px ;

`;

const LoginButton = styled.div`
    width: 100px;
    height: 100%;
    color: white;
    text-align: center;
    display: flex;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
`;

function Header({ onClickTitle, onToggleTheme }) {
  return (
    <Head onClick={onClickTitle}>
      <Title>Velog</Title>
      <Buttons>
      <SunIcon icon={faSun} onClick={onToggleTheme} />
        <SearchIcon icon={faSearch} />
        <LoginButton>로그인</LoginButton>
      </Buttons>
    </Head>
  );
}

export default Header;