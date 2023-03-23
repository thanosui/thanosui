import { FC } from "react"
import { VariantProps, tv } from "tailwind-variants"

const modal = tv({})

type ModalVariantProps = VariantProps<typeof modal>

export interface ModalProps extends ModalVariantProps {

}

export const Modal: FC<ModalProps> = () => {
    return <></>
}