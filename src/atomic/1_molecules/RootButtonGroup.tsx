import React, { FunctionComponent } from 'react';
import {
  Button, Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/core"
import { Link } from 'react-router-dom';

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

export interface IRootButtonGroupProps {
  RootButtonColor?: string;
  MenuColor?: string;
  MenuButtonColor?: string;
}

const RootButtonGroup: FunctionComponent<IRootButtonGroupProps> = ({
  RootButtonColor,
  MenuColor,
  MenuButtonColor
}) => {
  return (
    <Container>
      <Menu autoSelect={false} >
        <MenuButton as={Button} backgroundColor="" color={RootButtonColor} fontSize="15px">
          <Link to="/dashboard">
            대시보드
          </Link>
        </MenuButton>
      </Menu>
      <Menu autoSelect={false} >
        <MenuButton as={Button} backgroundColor="" color={RootButtonColor} fontSize="15px">
          강좌
        </MenuButton>
        <MenuList backgroundColor={MenuColor}>
          <MenuItem backgroundColor={MenuButtonColor} color="#ffffff" fontSize="15px">
            <Link to="/lectures" style={{ width: "100%", height: "100%" }}>
              목록 보기
          </Link>
          </MenuItem >
          <MenuItem backgroundColor={MenuButtonColor} color="#ffffff" fontSize="15px" width="100%">
            <Link to="/lectures/new" style={{ width: "100%", height: "100%" }} >
              등록
              </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu autoSelect={false}>
        <MenuButton as={Button} backgroundColor="" color={RootButtonColor} fontSize="15px">
          강사
        </MenuButton>
        <MenuList backgroundColor={MenuColor}>
          <MenuItem backgroundColor={MenuButtonColor} color="#ffffff" fontSize="15px">
            <Link to="/incstuctors" style={{ width: "100%", height: "100%" }}>
              목록 보기
          </Link>
          </MenuItem >
          <MenuItem backgroundColor={MenuButtonColor} color="#ffffff" fontSize="15px">
            <Link to="/incstuctors/new" style={{ width: "100%", height: "100%" }}>
              등록
          </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Container>
  )
}

export default RootButtonGroup