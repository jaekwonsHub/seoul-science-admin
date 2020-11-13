import React from "react";
import { Text, Select, Input } from "@chakra-ui/core";
import styled from "styled-components";
import DashBoardDataName from "./DashBoardDataName";
import FLButton from "./FLButton";


const Container = styled.div`
  margin: 10px 0px;
`

const SearchBox = styled.div`
  width : 100%;
  margin : 10px 0px;
  display:flex;
`
const DatePickerContainer = styled.div`
  margin : 15px 0px;
  display:flex;
`
const DatePickerBox = styled.div`
  width: 50%;
`
const LectureListContainer = styled.div`
  width: 100%
  height: 40px;
`
const LectureListHead = styled.div`
  width:100%
  height:px;
  border: 1px solid #000000;
  padding:3px;
  border-radius: 3px;
`

const SearchData = () => {
  return (
    <Container>
      <Text fontSize="25px" fontWeight="700" >검색</Text>
      <SearchBox >
        <Select placeholder="키워드 선택" width="200px" borderColor="#000000" marginRight="5px">
          <option value="강의명으로 검색">강의명으로 검색</option>
          <option value="강사 이름으로 검색">강사 이름으로 검색</option>
          <option value="학교로 검색">학교로 검색</option>
          <option value="소속 지역으로 검색">소속 지역으로 검색</option>
        </Select>
        <Input borderColor="#000000" />
      </SearchBox>
      <DatePickerContainer>
        <DatePickerBox>
          <Text fontSize="18px" fontWeight="700">시작일</Text>
        </DatePickerBox>
        <DatePickerBox>
          <Text fontSize="18px" fontWeight="700">종료일</Text>
        </DatePickerBox>
      </DatePickerContainer>
      <LectureListContainer>
        <LectureListHead>
          <DashBoardDataName />
        </LectureListHead>
        <FLButton />
      </LectureListContainer>
    </Container >
  )
}
export default SearchData