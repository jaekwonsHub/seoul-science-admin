import React from "react";
import { Input, Button } from "@chakra-ui/core"
import styled from "styled-components"

const Container = styled.div`
  padding: 55px 30px;
  display: flex;
`

const InputWithButton = () => {
  return (
    <Container>
      <Input placeholder="강사명 입력"></Input>
      <Button>추가하기</Button>
    </Container>
  )
}

export default InputWithButton