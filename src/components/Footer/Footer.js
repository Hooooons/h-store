import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 4rem;

  margin-top: auto;
  bottom: 0;

  background: green;
`;

function Footer() {
  return <MainContainer>footer</MainContainer>;
}

export default Footer;
