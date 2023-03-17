import { type VariantProps, tv } from 'tailwind-variants';
import { colorVariants } from '../utils/variants';

const avatar = tv({
    base: "inline-block h-6 w-6 rounded-full ring-2 ring-white",
    // slots: {
    //     // base: [
    //     //     "flex",
    //     //     "relative",
    //     //     "justify-center",
    //     //     "items-center",
    //     //     "box-border",
    //     //     "overflow-hidden",
    //     //     "align-middle",
    //     //     "text-white",
    //     //     "z-10",
    //     // ],
    //     // img: [
    //     //     "flex",
    //     //     "object-cover",
    //     //     "w-full",
    //     //     "h-full",
    //     //     "transition-opacity",
    //     //     "!duration-500",
    //     //     "opacity-0",
    //     //     "data-[loaded=true]:opacity-100",
    //     // ],
    //     // fallback: ["flex", "items-center", "justify-center"], //...translateCenterClasses,
    //     // name: ["font-semibold", "text-center", "text-inherit"],//...translateCenterClasses,
    //     // icon: [
    //     //     //...translateCenterClasses,
    //     //     "flex",
    //     //     "items-center",
    //     //     "justify-center",
    //     //     "text-inherit",
    //     //     "w-full",
    //     //     "h-full",
    //     // ],
    // },
    variants: {
        size: {
            xs: {
                base: "w-7 h-7 text-[0.625rem]",
            },
            sm: {
                base: "w-8 h-8 text-xs",
            },
            md: {
                base: "w-10 h-10 text-xs",
            },
            lg: {
                base: "w-12 h-12 text-sm",
            },
            xl: {
                base: "w-16 h-16 text-md",
            },
        },
        color: {
            neutral: {
                base: colorVariants.solid.neutral,
            },
            primary: {
                base: colorVariants.solid.primary,
            },
            secondary: {
                base: colorVariants.solid.secondary,
            },
            success: {
                base: colorVariants.solid.success,
            },
            warning: {
                base: colorVariants.solid.warning,
            },
            danger: {
                base: colorVariants.solid.danger,
            },
        },
        radius: {
            none: {
                base: "rounded-none",
            },
            base: {
                base: "rounded",
            },
            sm: {
                base: "rounded-sm",
            },
            md: {
                base: "rounded-md",
            },
            lg: {
                base: "rounded-lg",
            },
            xl: {
                base: "rounded-xl",
            },
            "2xl": {
                base: "rounded-2xl",
            },
            "3xl": {
                base: "rounded-3xl",
            },
            full: {
                base: "rounded-full",
            },
        },
        // isBordered: {
        //     true: {
        //         base: "ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark",
        //     },
        // },
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
    defaultVariants: {
        size: "md",
        color: "neutral",
        radius: "full",
    },
    compoundVariants: [
        {
            color: "neutral",
            isBordered: true,
            class: {
                base: "ring-neutral",
            },
        },
        {
            color: "primary",
            isBordered: true,
            class: {
                base: "ring-primary",
            },
        },
        {
            color: "secondary",
            isBordered: true,
            class: {
                base: "ring-secondary",
            },
        },
        {
            color: "success",
            isBordered: true,
            class: {
                base: "ring-success",
            },
        },
        {
            color: "warning",
            isBordered: true,
            class: {
                base: "ring-warning",
            },
        },
        {
            color: "danger",
            isBordered: true,
            class: {
                base: "ring-danger",
            },
        },
        {
            isBordered: true,
            size: "xl",
            class: {
                base: "ring",
            },
        },
        {
            isInGroup: true,
            isFocusVisible: true,
            class: {
                base: "-translate-x-3",
            },
        },
    ],
});

export type AvatarVariantProps = VariantProps<typeof avatar>;
export type AvatarSlots = keyof ReturnType<typeof avatar>;

export interface AvatarProps extends AvatarVariantProps {
    className?: string
    src: string
}
export const Avatar = (props: AvatarProps) => {
    const { size, color, radius, className, ...rest } = props;

    return (
        <img
            {...rest}
            className={`${avatar({ size, color, radius })} ${className ?? ''}`}
        />
    )
}
