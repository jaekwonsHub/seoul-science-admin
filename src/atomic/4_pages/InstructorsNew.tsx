import React from "react"
import StandardPageTemplate from "../3_templates/StandardPageTemplate"

import MainHead from "../2_organisms/MainHead"
import InstructorsNewBody from "../2_organisms/InstructorsNewBody"



const InstructorsNew = () => {
  return (
    <StandardPageTemplate
      PageHead={<MainHead />}
      PageBody={<InstructorsNewBody />}
    />
  )
}
export default InstructorsNew