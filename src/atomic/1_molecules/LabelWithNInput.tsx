import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Text, Input } from "@chakra-ui/core"

const Container = styled.div``
const InputBox = styled.div`
  display: flex;
  margin: 10px 0px;
`

interface ILabelWithNInputProps {
  text?: string;
  placeholder1?: string;
  placeholder2?: string;
  placeholder3?: string;
}

const LabelWithNInput: FunctionComponent<ILabelWithNInputProps> = ({
  text,
  placeholder1,
  placeholder2,
  placeholder3,
}) => {
  return (
    <Container>
      <Text fontSize="17px" fontWeight="700">{text}</Text>
      <InputBox>
        <Input placeholder={placeholder1} borderColor="#000000" borderRadius="5px 0px 0px 5px" />
        <Input placeholder={placeholder2} borderColor="#000000" borderRadius="" />
        <Input placeholder={placeholder3} borderColor="#000000" borderRadius="0px 5px 5px 0px" />
      </InputBox>
    </Container>
  )
}

export default LabelWithNInput