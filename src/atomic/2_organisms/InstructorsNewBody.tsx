import { Button } from "@chakra-ui/core"
import React from "react"
import styled from "styled-components"
import LabelWithInput from "../1_molecules/LabelWithInput"
import LabelWithNInput from "../1_molecules/LabelWithNInput"

const Container = styled.div`
  padding: 10px 30px;
`

const InstructorsNewBody = () => {
  return (
    <Container>
      <LabelWithInput labelText="이름" InputPlaceHolder="이름" />
      <LabelWithInput labelText="주민등록번호" InputPlaceHolder="주민등록번호" />
      <LabelWithInput labelText="연락처" InputPlaceHolder="연락처" />
      <LabelWithNInput text="계좌번호" placeholder1="은행명" placeholder2="계좌번호" placeholder3="예금주" />
      <LabelWithInput labelText="강의 수당" InputPlaceHolder="수당 등급" />
      <Button border="1px solid">등록하기</Button>
    </Container>
  )
}
export default InstructorsNewBody