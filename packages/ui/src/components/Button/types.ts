import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ButtonVariants } from './Button';


export interface ButtonProps extends ButtonVariants, Omit<ComponentPropsWithoutRef<'button'>, 'color'> {
	children: ReactNode
	// color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
	// size: 'sm' | 'md' | 'lg'
	shadow: boolean
	as?: string
	leftIcon?: ReactNode
	rightIcon?: ReactNode
}
