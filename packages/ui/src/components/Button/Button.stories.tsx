import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';
import { ButtonProps } from './types';

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

const defaultProps = {
	children: "Button",
	// ...button.defaultVariants,
};

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	color: 'default',
	...defaultProps
}

export const Primary = Template.bind({});
Primary.args = {
	...defaultProps,
	color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	...defaultProps,
	color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
	...defaultProps,
	color: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
	...defaultProps,
	color: 'warning',
};

export const Error = Template.bind({});
Error.args = {
	color: 'error',
};

export const Disabled = Template.bind({});
Warning.args = {
	...defaultProps,
	disabled: true,
};

export const WithShadow = Template.bind({});
Warning.args = {
	...defaultProps,
	shadow: true,
};


export const WithIcons = Template.bind({});
WithIcons.args = {
	...defaultProps,
	leftIcon: <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>,
	//   rightIcon: <Camera />,
};