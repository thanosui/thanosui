import { FC, ReactNode } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const card = tv({
    base: 'bg-white text-black rounded-xl overflow-hidden shadow-md',
    variants: {
        variant: {
            default: 'border-gray-300',
            shadow: 'border-gray-300',
            flat: 'border-blue-500',
            bordered: 'border-purple-500',
            // success: 'border-green-500',
            // warning: 'border-yellow-500',
            // error: 'border-red-500',
        },
        isHoverable: {
            true: ''
        },
        isPressable: {
            true: ''
        }
    },
    // compoundVariants: [
    //     {

    //     }
    // ],
    defaultVariants: {
        variant: 'default',
    },
});


type CardHeaderProps = {
    className?: string;
    children: ReactNode
};

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
    return <div className={`px-6 py-4 bg-gray-100 ${className}`}>{children}</div>;
};

type CardFooterProps = {
    className?: string;
    children: ReactNode
};

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
    return <div className={`px-6 py-4 bg-gray-100 ${className}`}>{children}</div>;
};

type CardBodyProps = {
    className?: string;
    children: ReactNode
};

const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
    return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

type CardImageProps = {
    src: string;
    alt: string;
    className?: string;
};

const CardImage: React.FC<CardImageProps> = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={`h-48 w-full object-cover ${className}`} />;
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
}

export const Card: FC<CardProps> & CardSubComponents = ({ children }) => {
    return (
        <div className={card()}>
            {children}
        </div>
    )
}

Card.Header = CardHeader
Card.Footer = CardFooter
Card.Body = CardBody
Card.Image = CardImage