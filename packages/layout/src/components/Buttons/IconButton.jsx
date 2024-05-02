import { useState } from "react"

const IconButton = ({ children }) => {
    return (
        <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">View notifications</span>

            {children}
        </button>
    )
}

export default IconButton
