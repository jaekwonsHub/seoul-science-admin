import React from "react"
import styled from "styled-components"
import { Text } from "@chakra-ui/core"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width:100%;
  height:90px;
  border:1px solid #000000;
  border-radius: 3px;

`
const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`
const UnderLine = styled.div`
  width:90%;
  height:1px;
  margin: 10px 0px;
  background-color: #000000;
`
const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const StudentCountView = () => {
  return (
    <Container>
      <TopContainer>
        <Text fontSize="13px" fontWeight="700">총 인원: 0명</Text>
        <Text fontSize="13px" fontWeight="700"> 초등학생: 0명</Text>
        <Text fontSize="13px" fontWeight="700">고등학생: 0명</Text>
        <Text fontSize="13px" fontWeight="700">성인: 0명</Text>
      </TopContainer>
      <UnderLine />
      <BottomContainer>
        <Text fontSize="13px" fontWeight="700">남성: 0명</Text>
        <Text fontSize="13px" fontWeight="700">여성: 0명</Text>
      </BottomContainer>
    </Container>
  )
}

export default StudentCountView