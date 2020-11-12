import React from "react"
import SearchData from "../1_molecules/SearchData"
import styled from "styled-components"

const Container = styled.div`
  padding: 20px;
`

const DashBody = () => {
  return (
    <Container>
      <SearchData />
    </Container>
  )
}

export default DashBody