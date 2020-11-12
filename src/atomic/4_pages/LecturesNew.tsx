import React from "react";
import NewLectureBody from "../2_organisms/NewLectureBody";
import MainHead from "../2_organisms/MainHead";
import StandardPageTemplate from "../3_templates/StandardPageTemplate";

const option = ["data1", "data2", "data3", "data4"]

const LecturesNew = () => {
  return (
    <StandardPageTemplate
      PageHead={<MainHead />}
      PageBody={<NewLectureBody lectureList={option} classList={option} />}
    />
  )
}

export default LecturesNew