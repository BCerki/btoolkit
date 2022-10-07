import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

// const meta: Meta = {
//   title: 'Button',
//   component: Button,
// } ;

// export default meta;

// export const Default = () => <Button variant="primary">click me</Button>;

// export const Secondary = () => <Button variant="primary">click me</Button>;

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Comfort food',
};

export const ButtonTheme = Template.bind({});
ButtonTheme.args = Default.args;
ButtonTheme.parameters = {
  theme: 'button',
};

export const BcgovTheme = Template.bind({});
BcgovTheme.args = Default.args;
BcgovTheme.parameters = {
  theme: 'bcgov',
};
