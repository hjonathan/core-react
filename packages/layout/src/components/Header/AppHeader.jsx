import { useState } from "react"

const AppHeader = ({ children }) => {
    return (
        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            {children}
        </div>
    )
}

export default AppHeader
