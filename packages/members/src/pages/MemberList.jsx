import { useTranslation, initReactI18next } from "react-i18next"
import { useState, useReducer, useEffect } from "react"
import { InputV, Button, Cell, MemberCell } from "layout"
import { ToastContainer, toast } from "react-toastify"
import { globalProvider } from "shared"

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

const defaultData = [
    {
        firstName: "tanner",
        lastName: "linsley",
        age: 24,
        visits: 100,
        status: "In Relationship",
        progress: 50,
    },
    {
        firstName: "tandy",
        lastName: "miller",
        age: 40,
        visits: 40,
        status: "Single",
        progress: 80,
    },
    {
        firstName: "joe",
        lastName: "dirte",
        age: 45,
        visits: 20,
        status: "Complicated",
        progress: 10,
    },
]

const columnHelper = createColumnHelper()

export default function Login() {
    const { t } = useTranslation()
    const api = globalProvider("api")

    const columns = [
        columnHelper.accessor("id", {
            header: (info) => <Cell>{t("ID")}</Cell>,
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("name", {
            header: (info) => <Cell>{t("Name")}</Cell>,
            cell: (info) => {
                return (
                    <MemberCell
                        name={`${info.row?.original?.name} ${info.row?.original?.lastName}`}
                        email={info.row?.original?.email}
                    />
                )
            },
        }),
        columnHelper.accessor("phone", {
            header: (info) => <Cell>{t("Phone")}</Cell>,
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("document", {
            header: (info) => <Cell>{t("Document")}</Cell>,
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("address", {
            header: (info) => <Cell>{t("Address")}</Cell>,
            cell: (info) => info.getValue(),
        }),

        columnHelper.accessor("email", {
            header: (info) => <Cell>{t("Email")}</Cell>,
            cell: (info) => info.getValue(),
        }),
    ]

    const [error, setError] = useState()

    const [data, setData] = useState([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const getMembers = async () => {
        try {
            const { data } = await api.$i().get("/members")

            setData(data.data)
        } catch ({ response }) {
            setError(response.data.error)

            toast.error(response.data.message)
        }
    }

    useEffect(() => {
        getMembers()
    }, ["getMembers"])

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    className="whitespace-nowrap text-sm px-3 py-3 sm:pl-0"
                                    key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {table.getFooterGroups().map((footerGroup) => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.footer,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
    )
}
