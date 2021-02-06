import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

// import RightSideStart from "./RightSidePage/RightSideStart";
// import NewArrival from "./Categories/NewArrival";
// import Hat from "./Categories/Hat";
// import Accessories from "./Categories/Accessories";
// import Outer from "./Categories/Outer";
// import Top from "./Categories/Top";
// import Underwear from "./Categories/Underwear";
// import Pants from "./Categories/Pants";
// import Socks from "./Categories/Socks";
// import Shoes from "./Categories/Shoes";

import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSidePage from "./RightSidePage/RightSidePage";

const MainContainer = styled.div`
  /* 임시 */
  width: 100%;
  font-size: 5rem;
  display: flex;
  /* height: 50rem; */

  border: 3px solid red;
`;

function MainPage() {
  return (
    <MainContainer>
      <LeftSideBar />
      <RightSidePage>
        {/* <Route path="/" component={RightSideStart} /> */}

        {/* <Route path="/main" component={RightSideStart} /> */}

        {/* <Route path="/new" component={NewArrival} />
        <Route path="/hat" component={Hat} />
        <Route path="/acc" component={Accessories} />
        <Route path="/outer" component={Outer} />
        <Route path="/top" component={Top} />
        <Route path="/underwear" component={Underwear} />
        <Route path="/pants" component={Pants} />
        <Route path="/socks" component={Socks} />
        <Route path="/shoes" component={Shoes} /> */}
      </RightSidePage>
    </MainContainer>
  );
}

export default MainPage;
