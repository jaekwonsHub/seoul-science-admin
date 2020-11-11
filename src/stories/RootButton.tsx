import React, { FunctionComponent } from "react";
import { Box, Button } from "@chakra-ui/core";

export interface IHeadButtonesProps {
  backgroundColor: string;
  fontSize: number;
}

const RootButton: FunctionComponent<IHeadButtonesProps> = ({ backgroundColor, fontSize }) => {
  return <Box backgroundColor={backgroundColor} fontSize={fontSize}>Test</Box>
}

export default RootButton