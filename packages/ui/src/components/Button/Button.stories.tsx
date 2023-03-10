import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
	component: Button,
	args: {
		type: 'button',
		children: 'Button',
		size: 'md',
		color: 'default',
		disabled: false,
	},
	argTypes: {
		type: {
			description: 'Button type',
		},
		children: {
			description: 'Node',
		},
		size: {
			description: 'Button size',
		},
		color: {
			description: 'Button background color',
		},
		disabled: {
			description: 'Disable or enable button',
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	color: 'default',
};

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

export const Error = Template.bind({});
Error.args = {
	color: 'error',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
