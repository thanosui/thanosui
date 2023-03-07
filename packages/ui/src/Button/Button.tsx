import { ReactNode } from 'react';
import { tv } from 'tailwind-variants';

const button = tv({
  base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-orange-500 text-white",
      error: "bg-red-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  }
});

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size: 'sm' | 'md' | 'lg'
}

export const Button = (props: ButtonProps) => {
  const { children, size = 'md', color = 'primary', disabled, ...rest } = props;
  return (
    <button
      {...rest}
      className={button({ size, color })}>{children}</button>
  )
}