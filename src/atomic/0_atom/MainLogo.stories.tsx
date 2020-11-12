import React from "react";
import MainLogo, { IMainLogoProps } from "./MainLogo"
import { Story, Meta } from "@storybook/react/types-6-0"


export default {
  title: "Head/MainLogo",
  component: MainLogo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<IMainLogoProps> = (args) => <MainLogo {...args} />;

export const Phone_MiniSize = Template.bind({});

Phone_MiniSize.args = {
  fontSize: 13,
  fontWeight: 800,
  fontColor: "#999999"
}
export const Phone_MiddleSize = Template.bind({});

Phone_MiddleSize.args = {
  fontSize: 20,
  fontWeight: 800
}
export const Window_MiniSize = Template.bind({});

Window_MiniSize.args = {
  fontSize: 15,
  fontWeight: 800
}
export const Window_MiddleSize = Template.bind({});

Window_MiddleSize.args = {
  fontSize: 25,
  fontWeight: 800
}
export const Window_BigSize = Template.bind({});

Window_BigSize.args = {
  fontSize: 35,
  fontWeight: 800
}