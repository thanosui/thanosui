import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ButtonVariantProps } from './Button';
// import { ButtonVariants } from '../Button';


// export interface ButtonProps extends ButtonVariants, Omit<ComponentPropsWithoutRef<'2'>, 'color'> {
// 	children: ReactNode
// 	// color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
// 	// size: 'sm' | 'md' | 'lg'
// 	shadow: boolean
// 	as?: string
// 	leftIcon?: ReactNode
// 	rightIcon?: ReactNode
// }

type ButtonColor = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type As<Props = any> = React.ElementType<Props>;

export interface ButtonProps extends ButtonVariantProps {
	as?: As
	children: ReactNode
	icon?: React.ReactNode;
	onClick?: () => void;
	// disabled?: boolean;
	className?: string;
	// color?: ButtonColor;
	// size: "md" | "sm" | "lg" | "xl" | "xs",
	// variant: "shadow" | "bordered" | "solid" | "light" | "flat" | "faded" | "ghost"
}


export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode

}