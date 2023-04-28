import { FC, ReactNode } from "react"
import { type VariantProps, tv } from "tailwind-variants"
import cx from "../utils/cx"

const text = tv({
    base: [
        'text-transparent',
        'font-extrabold',
        'bg-clip-text'
    ],
    variants: {
        size: {
            xs: "text-xs",
            sm: "text-sm",
            md: "text-base",
            lg: "text-md",
            xl: "text-lg",
            '6xl': "text-6xl",
        }
    },
    defaultVariants: {
        size: '6xl'
    }
})

export type TextVariantProps = VariantProps<typeof text>

interface TextProps extends TextVariantProps {
    children: ReactNode
}

export const Text: FC<TextProps> = (props) => {
    const { children, size } = props
    const baseStyles = cx("bg-gradient-to-r from-cyan-500 to-blue-500", text({ size }))
    return (
        <p className={baseStyles}>{children}</p>
    )
}

