import React from "react"
import StandardPageTemplate from "../3_templates/StandardPageTemplate"

import MainHead from "../2_organisms/MainHead"
import InstructorsBody from "../2_organisms/InstructorsBody"

const Instructors = () => {
  return (
    <StandardPageTemplate
      PageHead={<MainHead />}
      PageBody={<InstructorsBody />}
    />
  )
}
export default Instructors