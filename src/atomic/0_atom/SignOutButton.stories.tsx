import React from "react";
import SignOutButton, { ISignOutButtonProps } from "./SignOutButton"
import { Story, Meta } from "@storybook/react/types-6-0"

export default {
  title: "Head/SignOutButton",
  component: SignOutButton,
  argTypes: {
    border: { control: 'color' },
  },
} as Meta

const Template: Story<ISignOutButtonProps> = (args) => <SignOutButton {...args} />;

export const Phone_MiniSize = Template.bind({});

Phone_MiniSize.args = {
  width: "100px",
  height: "100px"
}
export const Phone_MiddleSize = Template.bind({});

Phone_MiddleSize.args = {
  width: "100px",
  height: "100px"
}
export const Window_Small = Template.bind({});

Window_Small.args = {
  width: "100px",
  height: "100px"
}