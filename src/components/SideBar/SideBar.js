import React from "react";
import sideImage from "../../Images/sideBackImage1.jpg";
import styled from "styled-components";

const MainContainer = styled.div``;
const SideImage = styled.div`
  /* width: 300px; */
  /* height: 100%; */
  /* position: absolute; */
  border-radius: 30px;

  width: 25rem;
  /* height: 80%; */

  background-image: url(${sideImage});
  /* background-size: contain; */
  background-size: cover;

  background-repeat: no-repeat;
  ul {
    list-style: none;
  }
  li {
    padding: 3rem 0;
    border: 3px solid red;
  }
`;

function SideBar() {
  return (
    <MainContainer>
      <SideImage>
        <ul>
          <li>Hat</li>
          <li>Accessories</li>
          <li>Outer</li>
          <li>Top</li>
          <li>Underwear</li>
          <li>Pants</li>
          <li>Socks</li>
          <li>Shoes</li>
        </ul>
      </SideImage>
    </MainContainer>
  );
}

export default SideBar;
