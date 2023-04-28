import { FC } from "react"
import { VariantProps, tv } from "tailwind-variants"

const progress = tv({})

type ProgressVariantProps = VariantProps<typeof progress>

export interface ProgressProps extends ProgressVariantProps {
    value: number
    max: number
}

export const Progress: FC<ProgressProps> = (props) => {
    const { value = 30, max = 100 } = props
    const progress = (value / max) * 100;
    return <>
        <div className="relative h-4 rounded-full overflow-hidden bg-gray-200">
            <div
                className="absolute top-0 left-0 h-full bg-blue-500"
                style={{ width: `${progress}%` }}
            />
        </div>
    </>
}