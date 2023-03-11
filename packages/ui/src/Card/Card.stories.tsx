import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
    title: 'Components/Card',
    component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card />;

export const Default = Template.bind({});
