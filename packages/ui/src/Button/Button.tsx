import { type VariantProps, tv } from 'tailwind-variants';
import { ButtonProps } from './types';

const baseButton = tv({
	base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
	variants: {
		color: {
			default: 'bg-blue-500 text-white',
			primary: 'bg-cyan-500 text-white',
			secondary: 'bg-purple-500 text-white',
			success: 'bg-green-500 text-white',
			warning: 'bg-orange-500 text-white',
			error: 'bg-red-500 text-white',
		},
		isDisabled: {
			true: "opacity-50 bg-gray-500",
		},
		size: {
			sm: 'text-sm',
			md: 'text-base',
			lg: 'px-4 py-3 text-lg',
		},
	},
	compoundVariants: [
		{
			size: ['sm', 'md'],
			class: 'px-3 py-1',
		},
		{
			isDisabled: true,
			class: "bg-green-100 text-green-700 dark:text-green-800", // You can also use "className" 
		},
	],
	defaultVariants: {
		size: 'md',
		color: 'primary',
	},
});

// const shadowButton = tv({
// 	extend: baseButton,
// 	base: [
// 		"shadow-lg",
// 		// "tracking-wider",
// 		"shadow-blue-500/50",
// 	],
// });


export type ButtonVariants = VariantProps<typeof baseButton>

export const Button = (props: ButtonProps) => {
	const { children, size, color, shadow = false, as, leftIcon, rightIcon, ...rest } = props;

	const Component = as || "button";

	// let className = baseButton({ size, color })

	// if (shadow) className = shadowButton({ size, color })

	return (
		<Component className={baseButton({ size, color })}  {...rest}>
			{leftIcon}
			{children}
			{rightIcon}
		</Component>
	);
};
