import React from "react"
import styled from "styled-components"
import { Text, Input } from "@chakra-ui/core"

const Container = styled.div`
  padding: 10px 30px;
`
const InputGroup = styled.div`
  display: flex;
`

const FormInput = () => {
  return (
    <Container>
      <Text fontWeight="700" fontSize="16px" textAlign="left">검색</Text>
      <InputGroup>
        <Input border="1px solid " borderColor="#0E0E0E" height="30px" marginRight="3px" placeholder="강좌명으로 검색" fontSize="15px" />
        <Input border="1px solid " borderColor="#0E0E0E" height="30px" marginRight="3px" placeholder="강사 이름으로 검색" fontSize="15px" />
        <Input border="1px solid " borderColor="#0E0E0E" height="30px" marginRight="3px" placeholder="학교로 검색" fontSize="15px" />
        <Input border="1px solid " borderColor="#0E0E0E" height="30px" placeholder="소속 지역으로 검색" fontSize="15px" />
      </InputGroup>
    </Container>
  )
}
export default FormInput