import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const SubContainer = styled.div`
  display: flex;
`

const TextBox = styled.div`
  font-size: 13px;
  margin: 8px;
`

const DashBoardDataName = () => {
  return (
    <Container>
      <TextBox>강좌명</TextBox>
      <TextBox>시작일</TextBox>
      <TextBox>종료일</TextBox>
      <TextBox>요일</TextBox>
      <TextBox>시간</TextBox>
      <SubContainer>
        <TextBox>인원</TextBox>
        <TextBox>초</TextBox>
        <TextBox>중</TextBox>
        <TextBox>고</TextBox>
        <TextBox>성인</TextBox>
        <TextBox>남</TextBox>
        <TextBox>여</TextBox>
      </SubContainer>
      <TextBox>학교</TextBox>
      <TextBox>소속지역</TextBox>
      <TextBox>담당강사</TextBox>
    </Container>
  )
}

export default DashBoardDataName