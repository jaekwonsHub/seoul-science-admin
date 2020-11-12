import React, { FunctionComponent } from "react";
import { Text, Input } from "@chakra-ui/core"
import styled from "styled-components"

const Container = styled.div`
  margin: 10px 0px;
  width:100%;
`
interface ILabelWithInputProps {
  labelText?: string;

}

const LabelWithInput: FunctionComponent<ILabelWithInputProps> = (
  {
    labelText
  }
) => {
  return (
    <Container>
      <Text fontSize="17px" fontWeight="700">{labelText}</Text>
      <Input borderColor="#000000" marginTop="5px" />
    </Container>
  )
}

export default LabelWithInput