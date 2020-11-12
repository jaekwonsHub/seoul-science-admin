import React from "react";
import StandardPageTemplate from "../3_templates/StandardPageTemplate";

import MainHead from "../2_organisms/MainHead";
import LecturesBody from "../2_organisms/LecturesBody"

const Lectures = () => {
  return (
    <StandardPageTemplate
      PageHead={<MainHead />}
      PageBody={<LecturesBody />}
    />
  )
}

export default Lectures