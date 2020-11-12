import React, { FunctionComponent } from "react";
import styled from "styled-components"
import MainLogo from "../0_atom/MainLogo";
import RootButtonGroup from "../1_molecules/RootButtonGroup";
import SignOutButton from "../0_atom/SignOutButton";

const Container = styled.div`
  width: 100%;
  background-color: #1B365D;
  color: #FFFFFF;
  display: flex;
  justify-content:center;
  align-items:center;
  justify-content: space-between;
  padding: 15px;
`
const SubContainer = styled.div`
  display: flex;
`
const MainHead: FunctionComponent = ({ }) => {
  return (
    <Container>
      <SubContainer>
        <MainLogo fontSize={30} fontWeight={800} />
        <RootButtonGroup
          RootButtonColor="#ffffff"
          MenuColor="#1B365D"
          MenuButtonColor="#1B365D"
        />
      </SubContainer>
      <SignOutButton
        backgroundColor=""
        border="1px solid #ffffff"
        width="90px"
        height="40px" />
    </Container>
  )
}

export default MainHead