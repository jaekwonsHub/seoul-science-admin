import React from "react";
import styled from "styled-components"
import DataBarOptionName from "../molecules/DataBarOptionName";
import FLButtonGroup from "../molecules/FLButtonGroup";

const Container = styled.div`
  padding: 10px 30px;  
`
const SubContainer = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
`
const BottomButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
`

const ClassList = () => {
  return (
    <Container>
      <SubContainer>
        <DataBarOptionName />
      </SubContainer>
      <BottomButtonBox>
        <FLButtonGroup />
      </BottomButtonBox>
    </Container>
  )
}

export default ClassList