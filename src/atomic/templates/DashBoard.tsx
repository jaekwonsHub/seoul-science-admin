import React, { FunctionComponent } from "react";
import SeoulHead from "../organisms/SeoulHead";
import styled from "styled-components"
import FormButton from "../molecules/FormButton";
import FormInput from "../molecules/FormInput";
import FormDate from "../molecules/FormDate";
import ClassList from "../organisms/ClassList";
import TotalPeoPleInfo from "../molecules/TotalPeopleInfo";
import MentoList from "../organisms/MentoList";

const Container = styled.div`
  width: 100%
`
const Header = styled.div`
  
`
const DateContainer = styled.div`
  display: flex;
`
const TotalPeoPle = styled.div`
  width:100%;
  padding: 0px 30px;
`
const MentoContainer = styled.div``

interface IDashBoardProps {
  onClick?: () => any;
}

const DashBoard: FunctionComponent<IDashBoardProps> = ({ onClick }) => {
  return (
    <Container>
      <Header>
        <SeoulHead onClick={onClick} />
      </Header>
      <FormButton />
      <FormInput />
      <DateContainer>
        <FormDate>시작일</FormDate>
        <FormDate>종료일</FormDate>
      </DateContainer>
      <ClassList />
      <TotalPeoPle>
        <TotalPeoPleInfo />
      </TotalPeoPle>
      <MentoContainer>
        <MentoList />
      </MentoContainer>
    </Container>
  )
}

export default DashBoard