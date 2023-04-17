import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion } from './Accordion';

export default {
	title: 'Components/Accordion',
	component: Accordion,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
