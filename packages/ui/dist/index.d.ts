declare const Button: () => JSX.Element;

declare const Avatar: () => JSX.Element;

declare const Card: ({ title, cta, href, }: {
    title: string;
    cta: string;
    href: string;
}) => JSX.Element;

export { Avatar, Button, Card };
