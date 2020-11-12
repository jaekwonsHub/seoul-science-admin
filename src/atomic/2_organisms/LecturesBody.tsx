import React from "react";
import styled from "styled-components"
import LabelWithButton from "../1_molecules/LabelWithButton";
import SearchData from "../1_molecules/SearchData";

const Container = styled.div`
  padding: 10px 30px;
`
const SubContainer = styled.div``

const LecturesBody = () => {
  return (
    <Container>
      <LabelWithButton labelText="강의 리스트" buttonText="추가하기" />
      <SearchData />
    </Container>
  )
}
export default LecturesBody
