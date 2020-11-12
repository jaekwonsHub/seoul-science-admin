import React, { FunctionComponent } from "react"
import { Text } from "@chakra-ui/core"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

interface IDataTextProps {
  total?: string;
}

const DataText: FunctionComponent<IDataTextProps> = ({ children, total }) => {
  return (
    <Container>
      <Text fontSize="13px">{children}</Text>
      <Text fontSize="13px">{total} 명</Text>
    </Container>
  )
}

export default DataText