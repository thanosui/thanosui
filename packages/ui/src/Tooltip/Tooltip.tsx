import { FC, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants"

const tooltip = tv({})

type TooltipVariantProps = VariantProps<typeof tooltip>

export interface TooltipProps extends TooltipVariantProps {
    children: ReactNode
    text: string
}

export const Tooltip: FC<TooltipProps> = (props) => {

    const { text, children } = props
    return (
        <div className="relative inline-block">
            {children}
            <div className="hover:opacity-100 hover:pointer-events-auto absolute bottom-full left-1/2 transform -translate-x-1/2 py-2 px-4 bg-black text-white rounded-lg text-sm opacity-0 transition-opacity duration-300 pointer-events-none">
                {text}
            </div>
        </div>
    )
}