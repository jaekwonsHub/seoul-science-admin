import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Container = styled.div`
  width:100%;
  height: 30px;
  border: 1px solid #000000;
  border-radius: 5px;
`

const DataBox: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>
}

export default DataBox