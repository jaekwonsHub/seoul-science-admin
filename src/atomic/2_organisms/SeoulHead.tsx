import React, { FunctionComponent } from "react";
import MainLogo from "../0_atom/MainLogo";
import styled from "styled-components"
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

export interface ISeoulHeadProps {
}


const SeoulHead: FunctionComponent<ISeoulHeadProps> = ({ }) => {
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
      <SignOutButton backgroundColor="" border="1px solid #999999" width="90px" height="40px" />
    </Container>
  )
}

export default SeoulHead