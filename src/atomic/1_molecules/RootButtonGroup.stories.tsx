import React from "react";
import RootButtonGroup, { IRootButtonGroupProps } from "./RootButtonGroup"
import { Story, Meta } from "@storybook/react/types-6-0"

export default {
  title: "Head/RootButtonGroup",
  component: RootButtonGroup,

} as Meta


const Template: Story<IRootButtonGroupProps> = (args) => <RootButtonGroup {...args} />;

export const Phone_MiniSize = Template.bind({});

Phone_MiniSize.args = {

}