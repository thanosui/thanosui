import { FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

// const card = tv({
//     base: 'p-3 bg-white text-black rounded-xl overflow-hidden shadow-md',
//     variants: {
//         variant: {
//             default: 'border-gray-300',
//             shadow: 'border-gray-300',
//             flat: 'border-blue-500',
//             bordered: 'border-purple-500',
//             // success: 'border-green-500',
//             // warning: 'border-yellow-500',
//             // error: 'border-red-500',
//         },
//         color: {
//             neutral: colorVariants.solid.neutral,
//             primary: colorVariants.solid.primary,
//             secondary: colorVariants.solid.secondary,
//             success: colorVariants.solid.success,
//             warning: colorVariants.solid.warning,
//             danger: colorVariants.solid.danger
//         },
//         isHoverable: {
//             true: ''
//         },
//         isPressable: {
//             true: ''
//         }
//     },
//     // compoundVariants: [
//     //     {

//     //     }
//     // ],
//     defaultVariants: {
//         variant: 'default',
//     },
// });

const card = tv({
    slots: {
        base: [
            // ...focusVisibleClasses,
            "flex flex-col m-0 p-0 relative overflow-hidden w-full height-auto bg-white text-foreground rounded-xl box-border dark:bg-neutral-900 dark:text-foreground-dark",
        ],
        body: "px-4 py-6",
        footer: "px-4 py-4",
        header: "px-4 py-4",
    },
    variants: {
        variant: {
            shadow: "drop-shadow-2xl",
            bordered: "border-2 dark:border-slate-300",
            flat: "bg-neutral-100",
        },
        borderWeight: {
            light: "",
            normal: "",
            bold: "",
            extrabold: "",
            black: "",
        },
        isHoverable: {
            true: "hover:drop-shadow-lg",
        },
        isPressable: {
            true: "cursor-pointer",
        },
        disableAnimation: {
            true: "",
            false: "!transition motion-reduce:transition-none",
        },
    },
    compoundVariants: [
        {
            isHoverable: true,
            disableAnimation: false,
            class: "duration-200 hover:-translate-y-0.5",
        },
        {
            isPressable: true,
            disableAnimation: false,
            class: "active:scale-95",
        },
        {
            variant: "bordered",
            borderWeight: "light",
            class: "border",
        },
        {
            variant: "bordered",
            borderWeight: "normal",
            class: "border-2",
        },
        {
            variant: "bordered",
            borderWeight: "bold",
            class: "border-3",
        },
        {
            variant: "bordered",
            borderWeight: "extrabold",
            class: "border-4",
        },
        {
            variant: "bordered",
            borderWeight: "black",
            class: "border-5",
        },
    ],
    defaultVariants: {
        // variant: "shadow",
        isHoverable: false,
        disableAnimation: false
    },
});


type CardHeaderProps = {
    className?: string;
    children: ReactNode
};

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
    return <div className={card().header()}>{children}</div>;
};

type CardFooterProps = {
    className?: string;
    children: ReactNode
};

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
    return <div className={card().footer()}>{children}</div>;
};

type CardBodyProps = {
    className?: string;
    children: ReactNode
};

const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
    return <div className={card().body()}>{children}</div>;
};

type CardImageProps = {
    src: string;
    alt: string;
    className?: string;
};

const CardImage: React.FC<CardImageProps> = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={`h-48 w-full object-cover ${className}`} />;
};

const CardDivider: React.FC = () => {
    return <div className={`border-2`} ></div>;
};

export type CardVariantProps = VariantProps<typeof card>

export interface CardProps extends CardVariantProps {
    children: ReactNode
};

type CardSubComponents = {
    Header: typeof CardHeader
    Footer: typeof CardFooter
    Body: typeof CardBody
    Image: typeof CardImage
    Divider: typeof CardDivider
}

export const Card: FC<CardProps> & CardSubComponents = (props) => {
    const { children, variant, isHoverable, isPressable, disableAnimation, ...rest } = props;

    return (
        <div className={card({ variant, isHoverable, isPressable, disableAnimation }).base()}>
            {children}
        </div>
    )
}

Card.Header = CardHeader
Card.Footer = CardFooter
Card.Body = CardBody
Card.Image = CardImage
Card.Divider = CardDivider