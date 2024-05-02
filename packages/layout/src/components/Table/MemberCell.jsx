import { useState } from "react"

const MemberCell = ({ name, email }) => {
    const image =
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

    return (
        <div className="flex items-center">
            <div className="h-11 w-11 flex-shrink-0">
                <img
                    className="h-11 w-11 rounded-full"
                    src={image}
                    alt=""
                />
            </div>
            <div className="ml-4">
                <div className="text-gray-900">{name}</div>
                <div className="mt-1 text-gray-500">{email}</div>
            </div>
        </div>
    )
}

export default MemberCell
