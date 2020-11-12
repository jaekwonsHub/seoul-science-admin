import React, { FunctionComponent } from "react";
import { Text } from "@chakra-ui/core";
import { Link } from "react-router-dom"

export interface IMainLogoProps {
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
}

const MainLogo: FunctionComponent<IMainLogoProps> = ({ fontSize, fontWeight, fontColor, }) => {
  return <Text fontSize={fontSize} fontWeight={fontWeight} color={fontColor}>
    <Link to="/">
      서울 시립 과학관
    </Link>
  </Text>
}

export default MainLogo