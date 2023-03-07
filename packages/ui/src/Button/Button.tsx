import { tv } from 'tailwind-variants';

const button = tv({
  base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
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

interface ButtonProps {
  title: string
  type: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
}
export const Button = ({ title, size = 'sm', type = 'primary' }: ButtonProps) => {
  return (
    <button style={{ borderWidth: 2, }} className={button({ size, color: type })}>{title}</button>
  )
}