import { ComponentPropsWithoutRef, ReactNode } from 'react';
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

type ButtonColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type As<Props = any> = React.ElementType<Props>;

export interface ButtonProps {
	as?: As
	children: ReactNode
	icon?: React.ReactNode;
	text: string;
	onClick?: () => void;
	disabled?: boolean;
	shadow?: boolean;
	className?: string;
	color?: ButtonColor;
}