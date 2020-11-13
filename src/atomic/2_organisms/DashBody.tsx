import React from "react"
import SearchData from "../1_molecules/SearchData"
import styled from "styled-components"
import StudentCountView from "../1_molecules/StudentCountView"

const Container = styled.div`
  padding: 20px;
`

const DashBody = () => {
  return (
    <Container>
      <SearchData />
      <StudentCountView />
    </Container>
  )
}

export default DashBody