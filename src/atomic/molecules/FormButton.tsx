import React from "react";
import { Text, Button } from "@chakra-ui/core"
import styled from "styled-components"

const Container = styled.div`
  padding: 10px 30px;
`
const SubContainer = styled.div`
  display:flex;
  justify-content:center;
`

const FormButton = () => {
  return (
    <Container>
      <Text fontWeight="800" fontSize="20px" textAlign="left">강의 리스트</Text>
      <SubContainer>
        <Button width="100%" backgroundColor="" border="1px solid #319795" color="#319795">추가하기</Button>
      </SubContainer>
    </Container>
  )
}

export default FormButton