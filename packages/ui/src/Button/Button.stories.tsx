import { ComponentMeta, ComponentStory, Meta, Story, storiesOf } from '@storybook/react';

import { Button } from './Button';
import { ButtonProps } from './types';
import { HeartIcon } from '../Icons/HeartIcon';

// import Button, { ButtonProps } from './Button';

export default {
	title: 'components/Button',
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Default',
	color: 'neutral',
};

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary',
	color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: 'Secondary',
	color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
	children: 'Success',
	color: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
	children: 'Warning',
	color: 'warning',
};

export const Error = Template.bind({});
Error.args = {
	children: 'Error',
	color: 'danger',
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Disabled',
	disabled: true,
	color: 'neutral',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	children: 'With Icon',
	color: 'neutral',
	icon: <HeartIcon />
};

export const WithShadow = Template.bind({});
WithShadow.args = {
	children: 'With Shadow',
	color: 'neutral',
	variant:'shadow'
};

// export default {
// 	component: Button,
// 	title: 'components/Button',
// 	// args: {
// 	// 	type: 'button',
// 	// 	children: 'Button',
// 	// 	size: 'md',
// 	// 	color: 'default',
// 	// 	disabled: false,
// 	// },
// 	// argTypes: {
// 	// 	type: {
// 	// 		description: 'Button type',
// 	// 	},
// 	// 	children: {
// 	// 		description: 'Node',
// 	// 	},
// 	// 	size: {
// 	// 		description: 'Button size',
// 	// 	},
// 	// 	color: {
// 	// 		description: 'Button background color',
// 	// 	},
// 	// 	disabled: {
// 	// 		description: 'Disable or enable button',
// 	// 	},
// 	// },
// } as ComponentMeta<typeof Button>;


// storiesOf('Button', module)
// 	.add('Default', () => <Button text="Default" color="default" />)
// 	.add('Primary', () => <Button text="Primary" color="primary" />)
// 	.add('Secondary', () => <Button text="Secondary" color="secondary" />)
// 	.add('Success', () => <Button text="Success" color="success" />)
// 	.add('Warning', () => <Button text="Warning" color="warning" />)
// 	.add('Error', () => <Button text="Error" color="error" />);

// const defaultProps = {
// 	children: "Button",
// 	// ...button.defaultVariants,
// };

// const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

// export const Default = Template.bind({});
// Default.args = {
// 	color: 'default',
// 	...defaultProps
// }

// export const Primary = Template.bind({});
// Primary.args = {
// 	...defaultProps,
// 	color: 'primary',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
// 	...defaultProps,
// 	color: 'secondary',
// };

// export const Success = Template.bind({});
// Success.args = {
// 	...defaultProps,
// 	color: 'success',
// };

// export const Warning = Template.bind({});
// Warning.args = {
// 	...defaultProps,
// 	color: 'warning',
// };

// export const Error = Template.bind({});
// Error.args = {
// 	color: 'error',
// };

// export const Disabled = Template.bind({});
// Warning.args = {
// 	...defaultProps,
// 	disabled: true,
// };

// export const WithShadow = Template.bind({});
// Warning.args = {
// 	...defaultProps,
// 	shadow: true,
// };


// export const WithIcons = Template.bind({});
// WithIcons.args = {
// 	...defaultProps,
// 	// leftIcon: <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>,
// 	//   rightIcon: <Camera />,
// };