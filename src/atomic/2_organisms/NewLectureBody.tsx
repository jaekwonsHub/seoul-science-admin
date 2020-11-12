import React, { FunctionComponent } from "react";
import styled from "styled-components"
import LabelWithSelect from "../1_molecules/LabelWithSelect";

const Container = styled.div`
  padding: 10px 30px;
`


interface INewLectureBodyProps {
  lectureList: string[],
  classList: string[]
}

const NewLectureBody: FunctionComponent<INewLectureBodyProps> = ({
  lectureList, classList
}) => {
  return (
    <Container>
      <LabelWithSelect labelText="강사 추가하기" options={lectureList} />
      <LabelWithSelect labelText="강의 추가하기" options={classList} />
    </Container>
  )
}

export default NewLectureBody