import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items:center;
  width: 80%;
  height: 30px;
  border: 1px solid #000000;
  border-radius : 3px;
  margin-top: 10px;
`
const SubContainer = styled.div`
  width: 50%;
  padding-left: 20px;
  font-size : 13px;
`

interface IListLabelProps {
  text1?: string;
  text2?: string;
}

const ListLabel: FunctionComponent<IListLabelProps> = ({
  text1, text2
}) => {
  return (
    <Container>
      <SubContainer>{text1}</SubContainer>
      <SubContainer>{text2}</SubContainer>
    </Container>
  )
}

export default ListLabel