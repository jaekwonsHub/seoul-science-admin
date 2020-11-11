import React from "react"
import DataText from "../atom/DataText"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items:center;
`

const TotalGroupBottom = () => {
  return (
    <Container>
      <DataText>남성 :</DataText>
      <DataText>여성 :</DataText>
    </Container>
  )
}

export default TotalGroupBottom