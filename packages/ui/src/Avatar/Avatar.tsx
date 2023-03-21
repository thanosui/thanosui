import { type VariantProps, tv } from 'tailwind-variants';
import { colorVariants } from '../utils/variants';
import cx from '../utils/cx';
import { ReactNode } from 'react';

const avatar = tv({
    base: [
        // "inline-block",
        // "h-6",
        // "w-6",
        // "rounded-full",
        // "border-2",
        // "border-white-500"
        "flex",

        "relative",
        "justify-center",
        "items-center",
        "box-border",
        "overflow-hidden",
        "align-middle",
        "text-white",
        "z-10",
    ],
    variants: {
        size: {
            xs: "w-7 h-7 text-[0.625rem]",
            sm: "w-8 h-8 text-xs",
            md: "w-10 h-10 text-xs",
            lg: "w-12 h-12 text-sm",
            xl: "w-16 h-16 text-md",
        },
        color: {
            neutral: colorVariants.solid.neutral,
            primary: colorVariants.solid.primary,
            secondary: colorVariants.solid.secondary,
            success: colorVariants.solid.success,
            warning: colorVariants.solid.warning,
            danger: colorVariants.solid.danger//'border-red-300',//colorVariants.solid.danger,
        },
        radius: {
            none: "rounded-none",
            base: "rounded",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl",
            full: "rounded-full",
        },
        isBordered: {
            true: "border-2 border-offset-2 border-offset-background dark:border-offset-background-dark"
        },
        // isDisabled: {
        //     true: {
        //         base: "opacity-50",
        //     },
        // },
        // isFocusVisible: {
        //     true: {
        //         base: [], //...ringClasses
        //     },
        // },
        // isInGroup: {
        //     true: {
        //         base: "-ml-2 hover:-translate-x-3 transition-transform",
        //     },
        // },
        // isInGridGroup: {
        //     true: {
        //         base: "m-0 hover:translate-x-0",
        //     },
        // },
    },
    compoundVariants: [
        {
            color: "neutral",
            isBordered: true,
            class: "border-neutral-300",
        },
        {
            color: "primary",
            isBordered: true,
            class: "border-blue-300",
        },
        {
            color: "secondary",
            isBordered: true,
            class: "border-blue-300",
        },
        {
            color: "success",
            isBordered: true,
            class: "border-green-300",
        },
        {
            color: "warning",
            isBordered: true,
            class: "border-yellow-00",
        },
        {
            color: "danger",
            isBordered: true,
            class: "border-red-300",
        },
        {
            isBordered: true,
            size: "xl",
            class: "ring",
        },
        {
            isInGroup: true,
            isFocusVisible: true,
            class: "-translate-x-3",
        },
    ],
    defaultVariants: {
        size: "md",
        color: "neutral",
        radius: "full"
    },
});

export type AvatarVariantProps = VariantProps<typeof avatar>;
export type AvatarSlots = keyof ReturnType<typeof avatar>;

export interface AvatarProps extends AvatarVariantProps {
    className?: string
    src: string
    text: string
    isBordered?: boolean
}

export const Avatar = (props: AvatarProps) => {
    const { size, color, radius, className, src, text, isBordered, ...rest } = props;

    const baseStyles = cx(avatar({ size, color, radius, isBordered }), className);
    return (
        <span className={baseStyles}>
            {text}
            {src &&
                <img
                    src={src}
                    className='rounded-full duration-0 transition hover:scale-150'
                // className={baseStyles}
                />
            }
        </span>
    )
}
