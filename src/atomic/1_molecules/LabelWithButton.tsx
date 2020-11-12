import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Text, Button } from "@chakra-ui/core"

const Container = styled.div`
  margin: 10px 0px;
`

interface IAddClassButtonProps {
  fontSize?: string;
  fontWeght?: string;
  fontColor?: string;
  labelText?: string;
  buttonText?: string;
  onClick?: () => void;
}

const LabelWithButton: FunctionComponent<IAddClassButtonProps> = ({
  labelText,
  buttonText,
  onClick
}) => {
  return (
    <Container>
      <Text fontSize="25px" fontWeight="700" margin="10px 0px" >
        {labelText}
      </Text>
      <Button backgroundColor="" width="100%" height="40px" border="1px solid #319795" color="#319795" onClick={onClick} >{buttonText}</Button>
    </Container>
  )
}

export default LabelWithButton;