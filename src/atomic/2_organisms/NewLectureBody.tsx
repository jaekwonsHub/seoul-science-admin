import React, { FunctionComponent, useState } from "react";
//import DatePicker from "react-datepicker";

import { Button, Text } from "@chakra-ui/core";
import styled from "styled-components"
import LabelWithInput from "../1_molecules/LabelWithInput";
import LabelWithSelect from "../1_molecules/LabelWithSelect";

const Container = styled.div`
  padding: 10px 30px;
`

const SubContainer = styled.div`
  display: flex;
`
const Box = styled.div`
  width:100%;
  margin-right: 10px;
`
const DatePickerContainer = styled.div`
  display: flex;
  margin : 15px 0px;
`
const DatePickerBox = styled.div`
  width:100%;
  display: flex;
`

interface INewLectureBodyProps {
  lectureList: string[],
  classList: string[]
}

const NewLectureBody: FunctionComponent<INewLectureBodyProps> = ({
  lectureList, classList
}) => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Container>
      <LabelWithSelect labelText="강사 추가하기" options={lectureList} />
      <LabelWithSelect labelText="강의 추가하기" options={classList} />
      <DatePickerContainer>
        <DatePickerBox>
          <Text fontSize="18px" fontWeight="700">시작일</Text>
        </DatePickerBox>
        <DatePickerBox>
          <Text fontSize="18px" fontWeight="700">종료일</Text>
        </DatePickerBox>
      </DatePickerContainer>
      <LabelWithInput labelText="강의 시간 설정" />
      <SubContainer>
        <Box>
          <LabelWithInput labelText="기관(학교명)" />
        </Box>
        <LabelWithInput labelText="소속지역(구)" />
      </SubContainer>
      <SubContainer>
        <Box>
          <LabelWithInput labelText="담당자" />
        </Box>
        <LabelWithInput labelText="연락처" />
      </SubContainer>
      <Button marginTop="10px" width="100%" backgroundColor="" border="1px solid #319795" color="#319795">강의 생성하기</Button>
    </Container>
  )
}

export default NewLectureBody