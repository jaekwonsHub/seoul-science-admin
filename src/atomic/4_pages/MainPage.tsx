import React from "react"
import StandardPageTemplate from "../3_templates/StandardPageTemplate"

import HomeBody from "../2_organisms/HomeBody"
import MainHead from "../2_organisms/MainHead"

const SeoulMainPage = () => {
  return (
    <StandardPageTemplate
      PageHead={<MainHead />}
      PageBody={<HomeBody />}>
    </StandardPageTemplate>
  )
}

export default SeoulMainPage