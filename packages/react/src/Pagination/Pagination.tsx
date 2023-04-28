import { FC } from "react"
import { type VariantProps, tv } from "tailwind-variants"
import { Button } from "../Button";

const paginationButton = tv({
    base: "text-sm rounded-lg mx-1",
    variants: {
        color: {
            default: "text-gray-500 hover:text-gray-700",
            active: "bg-blue-500 text-white",
            disabled: "opacity-50 cursor-not-allowed",
        },
    },
    defaultVariants: {
        color: "default",
    },
})

export type PaginationVariantProps = VariantProps<typeof paginationButton>

interface PaginationProps extends PaginationVariantProps {
    className?: string;
    currentPage: number;
    totalPages: number;
    onChange: (page: number) => void
}

export const Pagination: FC<PaginationProps> = (props) => {

    const { className = "", currentPage, totalPages, onChange, } = props

    const handlePageClick = (page: number) => {
        if (page < 1 || page > totalPages) return;
        onChange(page);
    };


    const pageButtons = [];

    // Build the list of page buttons
    for (let i = 1; i <= totalPages; i++) {
        const isCurrent = i === currentPage;
        pageButtons.push(
            <Button
                key={i}
                className={paginationButton({ color: isCurrent ? "active" : "default" })}

                // className={`mx-1 ${isCurrent
                //     ? "bg-blue-500 text-white"
                //     : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                //     }`}
                onClick={() => handlePageClick(i)}
                disabled={isCurrent}
            >
                {i}
            </Button>
        );
    }

    return <>
        <div className={`flex justify-center ${className}`}>
            <Button
                // className="mx-1 bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                className={paginationButton()}
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage <= 1}
            >
                Previous
            </Button>
            {pageButtons}
            <Button
                className={paginationButton()}
            // className="mx-1 bg-white text-gray-700 hover:bg"
            >
                Next
            </Button>
        </div>
    </>
}
