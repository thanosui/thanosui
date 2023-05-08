import { FC, InputHTMLAttributes } from "react"
import { VariantProps, tv } from "tailwind-variants"
import cx from "../../utils/cx"

const input = tv({
    base: [
        "py-3",
        "px-4",
        "block",
        "w-full",
        "border-gray-200",
        "rounded-md",
        "text-sm",
        "focus:border-blue-500",
        "focus:ring-blue-500",
        "dark:bg-slate-900",
        "dark:border-gray-700",
        "dark:text-gray-400"
    ],
    variants: {
        type: {},
        color: {},
        size: {}
    }
})

// type InputVariantProps = VariantProps<typeof input>

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input: FC<InputProps> = (props) => {
    const { type = 'text', className, ...rest } = props

    const baseStyle = cx(input(), className)


    return (
        <input
            type={type}
            className={baseStyle}
            {...rest}
        />
    )
}