import { FC, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants"
import { colorVariants } from "../utils/variants"

const badge = tv({
    base: [
        // "relative",
        // "inline-flex",
        // "shrink-0",
        // "overflow-visible",
        // "align-middle",
        // "place-content-center",
        // "origin-center",
        // "items-center",
        // "rounded-full",

        'px-1.5',
        'ring-1',
        'ring-slate-200',
        'rounded'
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
        shape: "rectangle",
        placement: "top-right",
        disableOutline: false,
        disableAnimation: false,
        isInvisible: false,
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
            {children}
        </span>
    </>
}