import { FC, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants"
import { colorVariants } from "../utils/variants"


// inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium 
const badge = tv({
    base: [
        'inline-flex',
        'items-center',
        'gap-1.5',
        'py-1.5',
        'px-3',
        'rounded-full',
        'text-xs',
        'font-medium'

        // "align-middle",
        // "place-content-center",
        // "origin-center",
        // "items-center",
        // "text-md",
        // 'px-2',
        // 'rounded'
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
        // size: {
        //     xs: "px-2 h-6 text-xs",
        //     sm: "px-3 h-8 text-sm",
        //     md: "px-4 h-10 text-base",
        //     lg: "px-6 h-12 text-md",
        //     xl: "px-8 h-14 text-lg",
        // },
    },
    compoundVariants: [
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
    ],
    defaultVariants: {
        variant: "solid",
        color: "neutral",
        size: "md",
        radius: "full",
        // shape: "rectangle",
        // placement: "top-right",
        // disableOutline: false,
        // disableAnimation: false,
        // isInvisible: false,
    }
})

type BadgeVariantProps = VariantProps<typeof badge>

export interface BadgeProps extends BadgeVariantProps {
    children?: ReactNode
}

export const Badge: FC<BadgeProps> = (props) => {
    const { color, size, variant, children } = props

    return <>
        <span className={badge({ color, size, variant })}>
            <span className="w-1.5 h-1.5 inline-block bg-indigo-400 rounded-full"></span>
            {children}
            <button type="button" className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-blue-600 hover:bg-blue-200 hover:text-blue-500 focus:outline-none focus:bg-blue-200 focus:text-blue-500">
                <span className="sr-only">Remove badge</span>
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </span>
    </>
}