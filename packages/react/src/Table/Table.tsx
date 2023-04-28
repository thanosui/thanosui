import { FC } from "react"
import { VariantProps, tv } from "tailwind-variants"

const table = tv({})

type TableVariantProps = VariantProps<typeof table>

export interface TableProps extends TableVariantProps {

}

export const Table: FC<TableProps> = () => {
    return (
        <table className="border-collapse border border-slate-500">
            <thead>
                <tr>
                    <th className="border border-slate-600">State</th>
                    <th className="border border-slate-600">City</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-slate-700">Indiana</td>
                    <td className="border border-slate-700">Indianapolis</td>
                </tr>
                <tr>
                    <td className="border border-slate-700">Ohio</td>
                    <td className="border border-slate-700">Columbus</td>
                </tr>
                <tr>
                    <td className="border border-slate-700">Michigan</td>
                    <td className="border border-slate-700">Detroit</td>
                </tr>
            </tbody>
        </table>)
}