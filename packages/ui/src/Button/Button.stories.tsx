import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// 'primary' | 'secondary' | 'success' | 'warning' | 'error'
export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  color: 'primary',
  size: 'md'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  color: 'secondary',
  size: 'md'
}

export const Success = Template.bind({});
Success.args = {
  children: 'Button',
  color: 'success',
  size: 'md'
}
export const Warning = Template.bind({});
Warning.args = {
  children: 'Button',
  color: 'warning',
  size: 'md'
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args


// export const Accessible = () => <button>Accessible button</button>;

// export const Inaccessible = () => (
//   <button style={{ backgroundColor: 'red', color: 'darkRed' }}>Inaccessible button</button>
// );