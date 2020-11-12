import React, { FunctionComponent } from "react";
import { Text, Select } from "@chakra-ui/core"
import styled from "styled-components"

const Container = styled.div`
`

interface ILabelWithSelectProps {
  labelText?: string;
  options?: string[];
}

const LabelWithSelect: FunctionComponent<ILabelWithSelectProps> = ({
  labelText,
  options
}) => {
  return (
    <Container>
      <Text marginTop="20px" fontSize="18px" fontWeight="700">{labelText}</Text>
      <Select marginTop="10px" borderColor="#000000">
        {options?.map(optionValue => <option>{optionValue}</option>)}
      </Select>
    </Container>
  )
}
export default LabelWithSelect