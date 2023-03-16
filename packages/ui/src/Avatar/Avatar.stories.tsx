import { ComponentMeta, ComponentStory, Story } from '@storybook/react';

import { Avatar, AvatarProps } from './Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AvatarProps> = (args) => <Avatar  {...args} />;


export const Default = Template.bind({});
Default.args = {
  src: 'https://i.pravatar.cc/300?u=a042581f4e29026709d'
}