import React, { FunctionComponent } from "react";
import { Button } from "@chakra-ui/core"

export interface ISignOutButtonProps {
  backgroundColor?: string;
  border?: string;
  width?: string;
  height?: string;
}

const SignOutButton: FunctionComponent<ISignOutButtonProps> = ({
  backgroundColor,
  border,
  width,
  height
}) => {
  return <Button backgroundColor={backgroundColor} border={border} width={width} height={height}>로그아웃</Button>
}

export default SignOutButton