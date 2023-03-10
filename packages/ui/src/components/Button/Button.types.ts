import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	children: ReactNode;
	color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
	size: 'sm' | 'md' | 'lg';
	// type: 'button' | 'submit' | 'reset' | undefined;
	// disabled: boolean;
}
