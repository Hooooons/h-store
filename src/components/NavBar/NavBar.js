import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import MainPage from "../MainPage/MainPage";

const MainContainer = styled.div`
  /* 임시 */
  width: 100%;
  height: 5rem;

  background: green;

  li {
    float: left;
    margin: 0;
    padding-left: 2rem;
  }
`;

function NavBar() {
  return (
    <MainContainer>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/">로고</Link>
        </li>
        <li style={{ marginRight: "10rem" }}>
          <Link to="/main">Home</Link>
        </li>
      </ul>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/upload">업로드</Link>
        </li>
        <li>
          <Link to="/wishlist">장바구니</Link>
        </li>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
        <li>
          <Link to="/signup">회원가입/</Link>
        </li>
        <li>
          <Link to="/signin">로그인 or 로그아웃</Link>
        </li>
      </ul>
    </MainContainer>
  );
}

export default NavBar;
