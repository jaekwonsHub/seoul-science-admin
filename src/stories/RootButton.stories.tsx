import React from "react";
import RootButton, { IHeadButtonesProps } from "../stories/RootButton"
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Example/Button',
  component: RootButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IHeadButtonesProps> = (args) => <RootButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  backgroundColor: "red",
  fontSize: 13
};