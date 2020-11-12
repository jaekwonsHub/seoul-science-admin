import React from "react"
import DataBox from "../0_atom/DataBox"
import { Text } from "@chakra-ui/core"
import styled from "styled-components"

const Container = styled.div`

  padding: 10px 30px;
`

const MentoList = () => {
  return (
    <Container>
      <Text fontWeight="700" fontSize="16px" textAlign="left">강사 리스트</Text>
      <DataBox />
    </Container>
  )
}

export default MentoList