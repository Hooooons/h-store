import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "../../firebase";
import styled from "styled-components";

import { Button } from "antd";

const MainContainer = styled.div`
  /* 임시 */
  width: 100%;
  height: 5rem;
  background: #527968;

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    float: left;
    margin: 1.3rem 0;
    padding-left: 2rem;
    font-size: 1.3rem;
  }
`;

function NavBar() {
  const user = useSelector((state) => state.userReducer.currentUser);
  // console.log(user.displayName);
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  if (user) {
    return (
      <MainContainer>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/">H-store</Link>
          </li>
          <li style={{ marginRight: "5rem" }}>
            <Link to="/main">Home</Link>
          </li>
        </ul>
        <ul style={{ listStyle: "none", float: "right" }}>
          <li>
            <Link to="/upload">업로드</Link>
          </li>
          <li>
            <Link to="/wishlist">장바구니</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
          <div
            style={{
              width: "20rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              float: "right",
              padding: "1rem 0",
              // border: "3px dotted red",
            }}
          >
            <img
              alt="user"
              src={user && user.photoURL}
              style={{
                width: "30px",
                height: "30px",
                marginTop: "3px",
                marginRight: "0.4rem",
                borderRadius: "8px",
              }}
            />
            <div
              style={{
                fontSize: "1.2rem",
                marginRight: "1rem",
              }}
            >
              {/* 관리자일 경우 */}
              {/* {user && user.email === "qweqwe@naver.com"
              ? user && user.displayName + "(관리자)님"
              : user && user.displayName + "님"} */}
              {/* 원래 코드 */}
              {user && user.displayName} 님
            </div>

            <Button
              onClick={handleLogout}
              type="primary"
              htmlType="submit"
              size="large"
              style={{
                background: "#a0d911",
                borderColor: "#7cb305",
                display: "flex",
                justifyContent: "center",
              }}
            >
              로그아웃
            </Button>
          </div>
        </ul>
      </MainContainer>
    );
  } else {
    return (
      <MainContainer>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/">H-store</Link>
          </li>
          <li style={{ marginRight: "10rem" }}>
            <Link to="/main">Home</Link>
          </li>
        </ul>
        <ul style={{ listStyle: "none" }}>
          {/* <li>
            <Link to="/upload">업로드</Link>
          </li>
          <li>
            <Link to="/wishlist">장바구니</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li> */}

          <div style={{ float: "right", margin: "0 1.5rem" }}>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </div>
        </ul>
      </MainContainer>
    );
  }
}

export default NavBar;
