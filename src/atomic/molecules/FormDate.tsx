import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Text } from "@chakra-ui/core";

const Container = styled.div`
  padding: 10px 30px;
  width: 45%;
`
const FormDate: FunctionComponent = ({ children }) => {

  return (
    <Container>
      <Text fontWeight="700" fontSize="16px" textAlign="left">{children}</Text>
    </Container>
  )
}

export default FormDate