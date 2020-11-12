import React from "react";
import StandardPageTemplate from "../3_templates/StandardPageTemplate";

import SeoulHead from "../2_organisms/SeoulHead";
import DashBody from "../2_organisms/DashBody";


const DashBoard = () => {
  return <StandardPageTemplate
    PageHead={<SeoulHead />}
    PageBody={<DashBody />}
  />
}

export default DashBoard