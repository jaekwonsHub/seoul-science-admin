import React, { FunctionComponent } from "react";
import { Text } from "@chakra-ui/core";

export interface IMainLogoProps {
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
}

const MainLogo: FunctionComponent<IMainLogoProps> = ({ fontSize, fontWeight, fontColor, children }) => {
  return <Text fontSize={fontSize} fontWeight={fontWeight} color={fontColor}>{children}</Text>
}

export default MainLogo