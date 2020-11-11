import React from "react"
import DataText from "../atom/DataText"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items:center;
`

const TotalGroup = () => {
  return (
    <Container>
      <DataText>총인원 :</DataText>
      <DataText>초등학생 :</DataText>
      <DataText>중학생 :</DataText>
      <DataText>고등학생 :</DataText>
      <DataText>성인 :</DataText>
    </Container>
  )
}

export default TotalGroup