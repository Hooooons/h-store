import React from "react";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ width: "100%", display: "flex" }}>
        <SideBar />
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
