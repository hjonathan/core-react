import { useState } from "react"

const SeparatorHz = ({ label }) => {
    return (
        <div className="relative">
            <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">{label}</span>
            </div>
        </div>
    )
}

export default SeparatorHz
