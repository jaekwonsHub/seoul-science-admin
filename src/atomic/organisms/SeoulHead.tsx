import React, { FunctionComponent } from "react";
import MainLogo from "../atom/MainLogo";
import styled from "styled-components"
import RootButtonGroup from "../molecules/RootButtonGroup";
import SignOutButton from "../atom/SignOutButton";


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
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
  onClick?: () => any;
}


const SeoulHead: FunctionComponent<ISeoulHeadProps> = ({ onClick }) => {
  return (
    <Container>
      <SubContainer>
        <MainLogo fontSize={30} fontWeight={800} >서울 시립 과학관</MainLogo>
        <RootButtonGroup onClick={onClick} />
      </SubContainer>
      <SignOutButton />
    </Container>
  )
}

export default SeoulHead