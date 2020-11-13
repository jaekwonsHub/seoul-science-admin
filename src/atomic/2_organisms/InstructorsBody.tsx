import React from "react"
import styled from "styled-components"
import DataListView from "../1_molecules/DataListView"
import InputWithButton from "../1_molecules/InputWithButton"

const Container = styled.div`
  display: flex;
  padding: 10px 30px;
  width:100%;
`
const SubContainer = styled.div`
  width:50%;
`

const InstructorsBody = () => {
  const testData = ["홍길동", "ddd", "홍길ddd동", "홍길d동", "dsa"]

  return (
    <Container>
      <SubContainer>
        <DataListView listName="강사 리스트" data={testData} />
      </SubContainer>
      <SubContainer>
        <InputWithButton />
      </SubContainer>
    </Container>
  )
}

export default InstructorsBody