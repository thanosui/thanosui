import { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarProps } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    isBordered: {
      type: 'boolean'
    },
    size: {
      control: 'select',
      options: [
        "none",
        "base",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "full"
      ]
    },
  }
};


export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  render: () => <Avatar src={'https://i.pravatar.cc/300?u=a042581f4e29026709d'} />,
};

export const WithText: Story = {
  args: {
    text: 'H',
  },
};
