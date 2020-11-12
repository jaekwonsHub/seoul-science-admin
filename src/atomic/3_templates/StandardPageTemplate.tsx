import React, { FunctionComponent } from "react";
import styled from "styled-components"


const Container = styled.div`
  width: 100%
`
const Head = styled.div``

const Body = styled.div``

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