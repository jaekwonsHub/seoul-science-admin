import React from "react";
import StandardPageTemplate from "../3_templates/StandardPageTemplate";
import MainHead from "../2_organisms/MainHead";
import DashBody from "../2_organisms/DashBody";


const DashBoard = () => {
  return <StandardPageTemplate
    PageHead={<MainHead />}
    PageBody={<DashBody />}
  />
}

export default DashBoard