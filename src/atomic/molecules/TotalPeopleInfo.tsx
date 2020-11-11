import React from "react";
import styled from "styled-components";
import TotalGroupBottom from "./TotalGroupBottom";
import TotalGroup from "./TotalGroupTop";

const Container = styled.div`
  width : 100%;  
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  border: 1px solid #000000;
  border-radius: 5px;

`
const SubContainer = styled.div`
  width: 90%;
  display: flex;
`
const UnderLine = styled.div`
  width:95%;
  height:1px;
  background-color:black;
`

const TotalPeoPleInfo = () => {
  return (
    <Container>
      <SubContainer>
        <TotalGroup />
      </SubContainer>
      <UnderLine />
      <SubContainer>
        <TotalGroupBottom />
      </SubContainer>
    </Container>
  )
}

export default TotalPeoPleInfo