import { FC } from "react"
import { VariantProps, tv } from "tailwind-variants"

const tooltip = tv({})

type TooltipVariantProps = VariantProps<typeof tooltip>

export interface TooltipProps extends TooltipVariantProps {

}

export const Tooltip: FC<TooltipProps> = () => {
    return <></>
}