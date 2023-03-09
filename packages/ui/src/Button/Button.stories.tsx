import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Button',
		color: 'default',
		size: 'md',
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
	color: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
	color: 'warning',
};

export const Disabled = Template.bind({});
Warning.args = {
	color: 'warning',
	disabled: true,
};
