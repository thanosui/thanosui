import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";
import cx from "../utils/cx";

const grid = tv({
    base: "grid",
    variants: {
        gap: {
            0: "gap-0",
            1: "gap-1",
            2: "gap-2",
            3: "gap-3",
            4: "gap-4",
            5: "gap-5",
        },
        columns: {
            1: "grid-cols-1",
            2: "grid-cols-2",
            3: "grid-cols-3",
            4: "grid-cols-4",
            5: "grid-cols-5",
            6: "grid-cols-6",
            7: "grid-cols-7",
            8: "grid-cols-8",
            9: "grid-cols-9",
            10: "grid-cols-10",
            11: "grid-cols-11",
            12: "grid-cols-12",
        },
    },
    defaultVariants: {
        gap: 1,
        columns: 3,
    },
});

const GridItem = ({ children }: { children: React.ReactNode }) => {
    return <div className="p-4">{children}</div>;
};


type GridVariantProps = VariantProps<typeof grid>
interface GridProps extends GridVariantProps {
    children: ReactNode
    className?: string;
};

export const Grid = ({ className = "", gap, columns, children }: GridProps) => {

    const baseStyles = cx(grid({
        columns,
        gap
    }), className)

    return (
        <div className={baseStyles}>
            {children}
        </div>
    );
};


Grid.Item = GridItem