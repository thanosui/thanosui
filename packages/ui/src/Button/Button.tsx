import { type VariantProps, tv } from 'tailwind-variants';
import { ButtonProps } from './types';
import { colorVariants } from '../utils/variants';

const button = tv({
	base: [
		"relative",
		"inline-flex",
		"font-medium",
		"apparance-none",
		"box-border",
		"outline-none",
		"select-none",
		"active:opacity-80",
		"focus:outline-none",
		"items-center",
		"justify-center",
		"overflow-hidden",
	],
	variants: {
		variant: {
			solid: "",
			bordered: "border-2 !bg-transparent",
			light: "!bg-transparent",
			flat: "",
			faded: "border-1.5",
			shadow: "",
			ghost: "border-2 !bg-transparent",
		},
		color: {
			default: "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300",
			primary: "text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600",
			secondary: "text-white bg-purple-500 hover:bg-purple-600 focus:bg-purple-600",
			success: "text-white bg-green-500 hover:bg-green-600 focus:bg-green-600",
			warning: "text-white bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600",
			danger: "text-white bg-red-500 hover:bg-red-600 focus:bg-red-600",
		},
		size: {
			xs: "px-2 h-6 text-xs",
			sm: "px-3 h-8 text-sm",
			md: "px-4 h-10 text-base",
			lg: "px-6 h-12 text-md",
			xl: "px-8 h-14 text-lg",
		},
		radius: {
			none: "rounded-none",
			base: "rounded",
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			xl: "rounded-xl",
			"2xl": "rounded-2xl",
			"3xl": "rounded-3xl",
			full: "rounded-full",
		},
		fullWidth: {
			true: "w-full",
		},
		disabled: {
			true: "opacity-50 bg-gray-500 pointer-events-none",
		},
		// shadow: {
		// 	true: 'shadow-lg shadow-blue-500/50'
		// }
	},
	compoundVariants: [
		{
			disabled: true,
			class: 'opacity-50 ',
		},
		{
			variant: "shadow",
			color: "danger",
			class: colorVariants.shadow.neutral,
		},
		{
			variant: "shadow",
			color: "primary",
			class: colorVariants.shadow.primary,
		},
		{
			variant: "shadow",
			color: "secondary",
			class: colorVariants.shadow.secondary,
		},
		{
			variant: "shadow",
			color: "success",
			class: colorVariants.shadow.success,
		},
		{
			variant: "shadow",
			color: "warning",
			class: colorVariants.shadow.warning,
		},
		{
			variant: "shadow",
			color: "danger",
			class: colorVariants.shadow.danger,
		},
		// bordered / color
		{
			variant: "bordered",
			color: "danger",
			class: colorVariants.bordered.neutral,
		},
		{
			variant: "bordered",
			color: "primary",
			class: colorVariants.bordered.primary,
		},
		{
			variant: "bordered",
			color: "secondary",
			class: colorVariants.bordered.secondary,
		},
		{
			variant: "bordered",
			color: "success",
			class: colorVariants.bordered.success,
		},
		{
			variant: "bordered",
			color: "warning",
			class: colorVariants.bordered.warning,
		},
		{
			variant: "bordered",
			color: "danger",
			class: colorVariants.bordered.danger,
		},
	],
	defaultVariants: {
		color: "default",
		size: "md",
		variant: "solid",
		radius: "base",
		// fullWidth: false,
		// isDisabled: false,
		// isInGroup: false,
		// disableAnimation: false,
	},
});

export type ButtonVariantProps = VariantProps<typeof button>

export const Button = (props: ButtonProps) => {
	const { children, color, disabled, size, shadow, bordered, variant, icon, as, ...rest } = props;

	const Component = as || "button";

	return (
		<Component
			{...rest}
			className={`${button({ color, disabled, size, variant })} ${props.className ?? ''}`}
			onClick={props.onClick}
			disabled={disabled}
		>
			{icon && <span className="mr-2">{icon}</span>}
			{children}
		</Component>
	);
};
