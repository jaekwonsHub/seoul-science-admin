import React from "react"
import StandardPageTemplate from "../3_templates/StandardPageTemplate"

import MainBody from "../2_organisms/MainBody"
import SeoulHead from "../2_organisms/SeoulHead"

const SeoulMainPage = () => {
  return (
    <StandardPageTemplate
      PageHead={<SeoulHead />}
      PageBody={<MainBody />}>
    </StandardPageTemplate>
  )
}

export default SeoulMainPage