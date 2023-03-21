import { type VariantProps, tv } from 'tailwind-variants';
import { ButtonProps } from './types';
import { colorVariants } from '../utils/variants';
import { AnimatePresence, motion } from "framer-motion"
import { useState } from 'react';
import Ripple from './Ripple';
import cx from '../utils/cx';

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
			neutral: colorVariants.solid.neutral,
			primary: colorVariants.solid.primary,
			secondary: colorVariants.solid.secondary,
			success: colorVariants.solid.success,
			warning: colorVariants.solid.warning,
			danger: colorVariants.solid.danger
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
	},
	compoundVariants: [
		{
			disabled: true,
			class: 'opacity-50 ',
		},
		{
			variant: "shadow",
			color: "neutral",
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
			color: "neutral",
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
		// flat / color
		{
			variant: "flat",
			color: "neutral",
			class: colorVariants.flat.neutral,
		},
		{
			variant: "flat",
			color: "primary",
			class: colorVariants.flat.primary,
		},
		{
			variant: "flat",
			color: "secondary",
			class: colorVariants.flat.secondary,
		},
		{
			variant: "flat",
			color: "success",
			class: colorVariants.flat.success,
		},
		{
			variant: "flat",
			color: "warning",
			class: colorVariants.flat.warning,
		},
		{
			variant: "flat",
			color: "danger",
			class: colorVariants.flat.danger,
		},
		// faded / color
		{
			variant: "faded",
			color: "neutral",
			class: colorVariants.faded.neutral,
		},
		{
			variant: "faded",
			color: "primary",
			class: colorVariants.faded.primary,
		},
		{
			variant: "faded",
			color: "secondary",
			class: colorVariants.faded.secondary,
		},
		{
			variant: "faded",
			color: "success",
			class: colorVariants.faded.success,
		},
		{
			variant: "faded",
			color: "warning",
			class: colorVariants.faded.warning,
		},
		{
			variant: "faded",
			color: "danger",
			class: colorVariants.faded.danger,
		},
		// light / color
		{
			variant: "light",
			color: "neutral",
			class: [colorVariants.light.neutral, "hover:!bg-neutral-40"],
		},
		{
			variant: "light",
			color: "primary",
			class: [colorVariants.light.primary, "hover:!bg-blue-40"],
		},
		{
			variant: "light",
			color: "secondary",
			class: [colorVariants.light.secondary, "hover:!bg-purple-40"],
		},
		{
			variant: "light",
			color: "success",
			class: [colorVariants.light.success, "hover:!bg-green-40"],
		},
		{
			variant: "light",
			color: "warning",
			class: [colorVariants.light.warning, "hover:!bg-yellow-40"],
		},
		{
			variant: "light",
			color: "danger",
			class: [colorVariants.light.danger, "hover:!bg-red-40"],
		},
		// ghost / color
		{
			variant: "ghost",
			color: "neutral",
			class: colorVariants.ghost.neutral,
		},
		{
			variant: "ghost",
			color: "primary",
			class: colorVariants.ghost.primary,
		},
		{
			variant: "ghost",
			color: "secondary",
			class: colorVariants.ghost.secondary,
		},
		{
			variant: "ghost",
			color: "success",
			class: colorVariants.ghost.success,
		},
		{
			variant: "ghost",
			color: "warning",
			class: colorVariants.ghost.warning,
		},
		{
			variant: "ghost",
			color: "danger",
			class: colorVariants.ghost.danger,
		},
	],
	defaultVariants: {
		color: "neutral",
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
	const { children, color, disabled, size, radius, variant, icon, as, ...rest } = props;

	const Component = as || "button";

	// 	return (
	// 		<motion.button
	// 			{...rest}
	// 			className={`${button({ color, disabled, size, radius, variant })} ${props.className ?? ''}`}
	// 			onClick={props.onClick}
	// 			// disabled={disabled}
	// 			whileHover={{ scale: 1.1 }}
	// 			whileTap={{ scale: 0.9 }}
	// 		>
	// 			{icon && <span className="mr-2">{icon}</span>}
	// 			{children}
	// 		</motion.button>
	// 		// <Component
	// 		// 	{...rest}
	// 		// 	className={`${button({ color, disabled, size, radius, variant })} ${props.className ?? ''}`}
	// 		// 	onClick={props.onClick}
	// 		// 	disabled={disabled}
	// 		// >
	// 		// 	{icon && <span className="mr-2">{icon}</span>}
	// 		// 	{children}
	// 		// </Component>
	// 	);

	/// #2
	const [ripples, setRipples] = useState<{ x: number, y: number, color: string }[]>([]);

	const handleClick = (e: any) => {
		const rect = e.target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		setRipples((prevRipples: any) => [
			...prevRipples,
			{ x, y, color: "rgba(255, 255, 255, 0.5)" },
		]);

	}

	const baseStyles = cx(
		'transition duration-100',
		button({ color, disabled, size, radius, variant }),
		props.className)

	return (
		<motion.button
			{...rest}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			// style={{ backgroundColor: "blue", color: "white", padding: "10px" }}
			onClick={handleClick}
			className={baseStyles}
			//@ts-ignore
			disabled={disabled}
		>
			{icon && <span className="mr-2">{icon}</span>}
			{children}
			{ripples.map(item =>
				<Ripple {...item} />
			)}
		</motion.button>
	);

}; 