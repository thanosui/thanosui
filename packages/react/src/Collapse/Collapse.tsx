import { FC, ReactNode, useState } from "react";

interface CollapseProps {
    title: string
    children: ReactNode
}

export const Collapse: FC<CollapseProps> & { Item: typeof Item } = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border rounded">
            <button
                className="w-full py-2 px-4 font-bold text-left bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
                onClick={toggleOpen}
            >
                {title}
            </button>
            {isOpen && (
                <div className="p-4">
                    {children}
                </div>
            )}
        </div>
    );
};

const Item = ({ name }: any) => {
    return <div className="border-b py-2">{name}</div>;
};

Collapse.Item = Item

