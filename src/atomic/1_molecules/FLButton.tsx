import React from "react"
import styled from "styled-components"
import { Button } from "@chakra-ui/core"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FLButton = () => {
  return (
    <Container>
      <Button fontSize="12px" fontWeight="700" backgroundColor="">처음</Button>
      <Button fontSize="12px" fontWeight="700" backgroundColor="">마지막</Button>
    </Container>
  )
}
export default FLButton