import React from "react";
import styled from "styled-components";

const TopBannerContainer = styled.div`
  width: 100%;
  height: 20rem;
  border: 3px dotted green;
  box-sizing: border-box;
`;
const TopBanner = styled.div`
  width: 100%;
  height: 20rem;
  border: 3px dotted blue;
  box-sizing: border-box;
`;

const BottomBannerContainer = styled.div`
  width: 100%;
  height: 30rem;
  border: 3px dotted blue;
  box-sizing: border-box;
`;
const BottomBanner = styled.div`
  width: 100%;
  height: 30rem;
  border: 3px dotted green;
  box-sizing: border-box;
`;

function RightSideStart() {
  return (
    <>
      <TopBannerContainer>
        <TopBanner>대문</TopBanner>
      </TopBannerContainer>
      <BottomBannerContainer>
        <BottomBanner>New제품들</BottomBanner>
      </BottomBannerContainer>
    </>
  );
}

export default RightSideStart;
