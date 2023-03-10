import { tv } from 'tailwind-variants';
import { ButtonProps } from './Button.types';

const buttonStyles = tv({
	base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
	variants: {
		color: {
			default: 'bg-blue-500',
			primary: 'bg-cyan-500',
			secondary: 'bg-purple-500',
			success: 'bg-green-500',
			warning: 'bg-orange-500',
			error: 'bg-red-500',
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
	],
});

const disabledButtonStyles = tv({
	base: 'font-medium bg-gray-600 text-gray-400 rounded-full',
	variants: {
		color: {
			default: 'bg-gray-600',
			primary: 'bg-cyan-500',
			secondary: 'bg-purple-500',
			success: 'bg-green-500',
			warning: 'bg-orange-500',
			error: 'bg-red-500',
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
	],
});

export const Button = ({ children, type = 'button', size = 'md', color = 'default', disabled = false, ...rest }: ButtonProps) => {
	return (
		<button
			className={disabled ? disabledButtonStyles({ size, color }) : buttonStyles({ size, color })}
			disabled={disabled}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};
