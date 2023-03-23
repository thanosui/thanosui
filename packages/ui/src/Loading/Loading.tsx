import { FC } from "react"
import { VariantProps, tv } from "tailwind-variants"

const loading = tv({})

type LoadingVariantProps = VariantProps<typeof loading>

export interface LoadingProps extends LoadingVariantProps {

}

export const Loading: FC<LoadingProps> = () => {
    return <></>
}