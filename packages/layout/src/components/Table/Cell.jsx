import { useState } from "react"

const Cell = ({ children }) => {
    return (
        <div
            scope="col"
            className="text-sm py-3 pl-4 pr-3 text-left font-semibold text-gray-900 sm:pl-0">
            {children}
        </div>
    )
}

export default Cell
