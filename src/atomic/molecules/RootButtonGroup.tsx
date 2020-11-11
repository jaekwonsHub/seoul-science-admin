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

interface IRootButtonGroupProps {
  onClick?: () => any;
}

const RootButtonGroup: FunctionComponent<IRootButtonGroupProps> = ({
  onClick
}) => {
  return (
    <Container>
      {/* <Button backgroundColor="" color="#ffffff" fontSize="15px">{root1Name}</Button>
      <Button backgroundColor="" color="#ffffff" fontSize="15px">{root2Name}</Button>
      <Button backgroundColor="" color="#ffffff" fontSize="15px">{root3Name}</Button> */}

      <Menu autoSelect={false} >
        <MenuButton as={Button} backgroundColor="" color="#ffffff" fontSize="15px">
          강좌
        </MenuButton>
        <MenuList backgroundColor="#1B365D">
          <MenuItem backgroundColor="#1B365D" color="#ffffff" fontSize="15px" onClick={onClick}>
            <Link to="/lectures">
              목록 보기
          </Link>
          </MenuItem >
          <MenuItem backgroundColor="#1B365D" color="#ffffff" fontSize="15px">
            등록
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu autoSelect={false}>
        <MenuButton as={Button} backgroundColor="" color="#ffffff" fontSize="15px">
          강사
        </MenuButton>
        <MenuList backgroundColor="#1B365D">
          <MenuItem backgroundColor="#1B365D" color="#ffffff" fontSize="15px">
            목록 보기
          </MenuItem >
          <MenuItem backgroundColor="#1B365D" color="#ffffff" fontSize="15px">
            등록
          </MenuItem>
        </MenuList>
      </Menu>
    </Container>
  )
}

export default RootButtonGroup