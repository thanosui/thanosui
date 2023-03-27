import { FC } from "react"
import { VariantProps, tv } from "tailwind-variants"
import cx from "../utils/cx"

const navbar = tv({
    slots: {
        base: 'bg-gray-800',
        item: ''
    },
    variants: {
        variant: {
            static: '',
            sticky: '',
            floating: ''
        },
        isBordered: {
            true: 'ring-1 ring-slate-700 rounded-md'
        },
        isCompact: {
            true: ''
        }
    }
})

type NavbarVariantProps = VariantProps<typeof navbar>

export interface NavbarProps extends NavbarVariantProps {
    links: {
        name: string
        href: string
    }[]
    logo: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { links, logo, isBordered } = props

    const slots = navbar({ isBordered })

    const baseStyle = cx(slots.base())

    return (
        <nav className={baseStyle}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-auto" src={logo} alt="Logo" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {links.map(link => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}