import { FC, MouseEvent, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Drip from "../Drip/Drip";
import { useDrip } from "../Drip/useDrip";

const card = tv({
    slots: {
        base: [
            "bg-white",
            "dark:bg-slate-800",
            "flex",
            "flex-col",
            "m-0",
            "p-0",
            "relative",
            "overflow-hidden",
            "w-full",
            "height-auto",
            "text-slate-900",
            "rounded-xl",
            "box-border",
            "dark:text-white"
        ],
        body: "px-4 py-6",
        footer: "px-4 py-4",
        header: "px-4 py-4",
    },
    variants: {
        variant: {
            shadow: "drop-shadow-2xl",
            bordered: "border-2 dark:border-slate-300",
            flat: '',//"bg-neutral-100",
            blured: 'dark:bg-transparent backdrop-blur-md'
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
            className: "duration-200 hover:-translate-y-0.5",
        },
        {
            isPressable: true,
            disableAnimation: false,
            className: "active:scale-95",
        },
        {
            variant: "bordered",
            borderWeight: "light",
            className: "border",
        },
        {
            variant: "bordered",
            borderWeight: "normal",
            className: "border-2",
        },
        {
            variant: "bordered",
            borderWeight: "bold",
            className: "border-3",
        },
        {
            variant: "bordered",
            borderWeight: "extrabold",
            className: "border-4",
        },
        {
            variant: "bordered",
            borderWeight: "black",
            className: "border-5",
        },
    ],
    defaultVariants: {
        // variant: "blured",
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
    const { drips, onClick } = useDrip()
    const { children, variant, isHoverable, isPressable, disableAnimation, ...rest } = props;

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        onClick(event)
    }

    return (
        <div
            className={card({ variant, isHoverable, isPressable, disableAnimation }).base()}
            onClick={handleClick}
        >
            <div className="">
                {children}
            </div>
            {isPressable && <Drip drips={drips} />}
        </div>
    )
}

Card.Header = CardHeader
Card.Footer = CardFooter
Card.Body = CardBody
Card.Image = CardImage
Card.Divider = CardDivider