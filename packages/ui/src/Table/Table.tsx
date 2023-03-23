import { FC } from "react"
import { VariantProps, tv } from "tailwind-variants"

const table = tv({})

type TableVariantProps = VariantProps<typeof table>

export interface TableProps extends TableVariantProps {

}

export const Table: FC<TableProps> = () => {
    return <></>
}