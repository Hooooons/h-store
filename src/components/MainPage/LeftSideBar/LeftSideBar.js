import React from "react";
import {
  // Route,
  Link,
} from "react-router-dom";

// import NewArrival from "../MainPage/Categories/NewArrival";
// import Hat from "../MainPage/Categories/Hat";
// import Accessories from "../MainPage/Categories/Accessories";
// import Outer from "../MainPage/Categories/Outer";
// import Top from "../MainPage/Categories/Top";
// import Underwear from "../MainPage/Categories/Underwear";
// import Pants from "../MainPage/Categories/Pants";
// import Socks from "../MainPage/Categories/Socks";
// import Shoes from "../MainPage/Categories/Shoes";

import sideImage from "../../../Images/sideBackImage1-1.jpg";
import styled from "styled-components";

const MainContainer = styled.div``;
const SideImage = styled.div`
  /* width: 300px; */
  /* height: 100%; */
  /* position: absolute; */
  border-radius: 30px;

  width: 100%;
  /* height: 80%; */

  background-image: url(${sideImage});
  /* background-size: contain; */
  background-size: cover;

  background-repeat: no-repeat;
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 2rem 5rem;
    margin: 0.3rem 0;
    border: 3px solid red;
    font-size: 2rem;
  }
`;

function LeftSideBar() {
  return (
    <MainContainer>
      <SideImage>
        <ul>
          <li>
            <Link to="/main/new">New Arrival</Link>
          </li>
          <li>
            <Link to="/main/hat">Hat</Link>
          </li>
          <li>
            <Link to="/main/acc">Accessories</Link>
          </li>
          <li>
            <Link to="/main/outer">Outer</Link>
          </li>
          <li>
            <Link to="/main/top">Top</Link>
          </li>
          <li>
            <Link to="/main/underwear">Underwear</Link>
          </li>
          <li>
            <Link to="/main/pants">Pants</Link>
          </li>
          <li>
            <Link to="/main/socks">Socks</Link>
          </li>
          <li>
            <Link to="/main/shoes">Shoes</Link>
          </li>
        </ul>
      </SideImage>

      {/* <Route path="/new" component={NewArrival} />
      <Route path="/hat" component={Hat} />
      <Route path="/acc" component={Accessories} />
      <Route path="/outer" component={Outer} />
      <Route path="/top" component={Top} />
      <Route path="/underwear" component={Underwear} />
      <Route path="/pants" component={Pants} />
      <Route path="/socks" component={Socks} />
      <Route path="/shoes" component={Shoes} /> */}
    </MainContainer>
  );
}

export default LeftSideBar;
