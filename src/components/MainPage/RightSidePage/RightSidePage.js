import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import RightSideStart from "./RightSideStart";
import NewArrival from "../Categories/NewArrival";
import Hat from "../Categories/Hat";
import Accessories from "../Categories/Accessories";
import Outer from "../Categories/Outer";
import Top from "../Categories/Top";
import Underwear from "../Categories/Underwear";
import Pants from "../Categories/Pants";
import Socks from "../Categories/Socks";
import Shoes from "../Categories/Shoes";

const MainContainer = styled.div`
  /* 임시 */
  width: 100%;
  font-size: 5rem;
  /* height: 50rem; */

  border: 3px solid red;
`;

function RightSidePage() {
  return (
    <MainContainer>
      <Route path="/" component={RightSideStart} exact />
      <Route path="/main" component={RightSideStart} exact />
      <Route path="/main/new" component={NewArrival} />
      <Route path="/main/hat" component={Hat} />
      <Route path="/main/acc" component={Accessories} />
      <Route path="/main/outer" component={Outer} />
      <Route path="/main/top" component={Top} />
      <Route path="/main/underwear" component={Underwear} />
      <Route path="/main/pants" component={Pants} />
      <Route path="/main/socks" component={Socks} />
      <Route path="/main/shoes" component={Shoes} />
    </MainContainer>
  );
}

export default RightSidePage;
