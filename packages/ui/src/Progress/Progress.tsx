import { FC } from "react"
import { VariantProps, tv } from "tailwind-variants"

const progress = tv({})

type ProgressVariantProps = VariantProps<typeof progress>

export interface ProgressProps extends ProgressVariantProps {

}

export const Progress: FC<ProgressProps> = () => {
    return <></>
}