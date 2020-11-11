import React from "react";
import { Text } from "@chakra-ui/core"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
`

const DataBarOptionName = () => {
  return <Container>
    <Text fontSize="12px">강좌명</Text>
    <Text fontSize="12px">시작일</Text>
    <Text fontSize="12px">종료일</Text>
    <Text fontSize="12px">요일</Text>
    <Text fontSize="12px">시간</Text>
    <Text fontSize="12px">인원</Text>
    <Text fontSize="12px">초</Text>
    <Text fontSize="12px">중</Text>
    <Text fontSize="12px">고</Text>
    <Text fontSize="12px">성인</Text>
    <Text fontSize="12px">남</Text>
    <Text fontSize="12px">여</Text>
    <Text fontSize="12px">학교</Text>
    <Text fontSize="12px">소속지역(구)</Text>
    <Text fontSize="12px">담당강사</Text>
  </Container>
}

export default DataBarOptionName