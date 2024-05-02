import { useState } from "react"

const IconButtonFlat = ({ label, path, svg }) => {
    return (
        <a
            href="#"
            className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
            {svg ? (
                svg
            ) : (
                <svg
                    className="h-5 w-5 fill-[#24292F]"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    {path}
                </svg>
            )}
            <span className="text-sm font-semibold leading-6">{label}</span>
        </a>
    )
}

export default IconButtonFlat
