import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Text } from "@chakra-ui/core"
import ListLabel from "../0_atom/ListLabel"

const Container = styled.div``


interface IDataListViewProps {
  listName?: string;
  data?: string[];
}

const DataListView: FunctionComponent<IDataListViewProps> = ({ children, listName, data }) => {
  return (
    <Container>
      <Text fontSize="25px" fontWeight="700" margin="10px 0px" >
        {listName}
      </Text>
      <ListLabel text1="순번" text2="이름" />
      {data?.map(data => <ListLabel text2={data} />)}
    </Container>
  )
}

export default DataListView