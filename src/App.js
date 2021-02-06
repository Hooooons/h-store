import React from "react";
import { Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";

import Login from "./components/LoginPage/Login";
import SignUp from "./components/LoginPage/SignUp";
import Upload from "./components/Upload/Upload";
import Wishlist from "./components/Wishlist/Wishlist";
import MyPage from "./components/MyPage/MyPage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route path="/" component={MainPage} exact />
      <Route path="/main" component={MainPage} />

      <Route path="/upload" component={Upload} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Footer />
    </div>
  );
}

export default App;
