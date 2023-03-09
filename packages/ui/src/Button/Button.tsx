import { tv } from 'tailwind-variants';
import { ButtonProps } from './Button.types';

const button = tv({
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
	defaultVariants: {
		size: 'md',
		color: 'primary',
	},
});

export const Button = (props: ButtonProps) => {
	const { children, size = 'md', color = 'primary', ...rest } = props;
	return (
		<button className={button({ size, color })} {...rest}>
			{children}
		</button>
	);
};
