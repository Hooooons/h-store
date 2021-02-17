import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import firebase from "./firebase";

//라우트
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";

import Login from "./components/LoginPage/Login";
import SignUp from "./components/LoginPage/SignUp";
import Upload from "./components/Upload/Upload";
import Wishlist from "./components/Wishlist/Wishlist";
import MyPage from "./components/MyPage/MyPage";

//리덕스
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "./redux/user_redux";

//antd
import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function App() {
  let history = useHistory();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.userReducer.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log("user", user);

      // 로그인이 된 상태
      if (user) {
        history.push("/");
        dispatch(setUser(user));
      } else {
        // 로그인이 되지 않은 상태.
        history.push("/");
        dispatch(clearUser());
      }
    });
  }, [history, dispatch]);

  if (isLoading) {
    const antIcon = (
      <LoadingOutlined
        style={{
          // width: "30rem",
          // height: "30rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10rem",
          margin: "0 auto",
        }}
        spin
      />
    );
    return (
      <div>
        <Spin indicator={antIcon} />
      </div>
    );
  } else {
    return (
      <div style={{ minWidth: "60rem" }}>
        <NavBar />

        <Route path="/" component={MainPage} exact />
        <Route path="/main" component={MainPage} />

        <Route path="/upload" component={Upload} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Footer />
      </div>
    );
  }
}

export default App;
