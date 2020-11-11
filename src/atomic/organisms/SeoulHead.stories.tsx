import React from "react";
import SeoulHead, { ISeoulHeadProps } from "./SeoulHead"
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Oraganism/SeoulHead',
  component: SeoulHead,
} as Meta;

const Template: Story<ISeoulHeadProps> = (args) => <SeoulHead {...args} />;

export const Default = Template.bind({});

export const Bold = Template.bind({});

Bold.args = {
  fontSize: 25,
  fontWeight: 800
}