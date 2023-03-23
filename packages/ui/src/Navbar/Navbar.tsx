import { FC } from "react"
import { VariantProps, tv } from "tailwind-variants"

const navbar = tv({})

type NavbarVariantProps = VariantProps<typeof navbar>

export interface NavbarProps extends NavbarVariantProps {

}

export const Navbar: FC<NavbarProps> = () => {
    return <></>
}