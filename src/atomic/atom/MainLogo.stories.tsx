import React from "react";
import MainLogo, { IMainLogoProps } from "../atom/MainLogo"
import { Story, Meta } from "@storybook/react/types-6-0"


export default {
  title: "Atom/MainLogo",
  component: MainLogo
} as Meta

const Template: Story<IMainLogoProps> = (args) => <MainLogo {...args} />;

export const Default = Template.bind({
  children: "Hello"
});


export const Bold = Template.bind({});

Bold.args = {
  fontSize: 25,
  fontWeight: 800
}