import React, { FunctionComponent } from "react";
import styled from "styled-components"

const Container = styled.div`
  width: 100%
  display: flex;
`
const Head = styled.div`
  width: 100%
`
const Body = styled.div`
  width: 100%
  display:flex;
`
interface IDashBoardProps {
  PageHead?: any;
  PageBody?: any;
}

const StandardPageTemplate: FunctionComponent<IDashBoardProps> = ({ PageHead, PageBody }) => {
  return (
    <Container>
      <Head>
        {PageHead}
      </Head>
      <Body>
        {PageBody}
      </Body>
    </Container>
  )
}

export default StandardPageTemplate