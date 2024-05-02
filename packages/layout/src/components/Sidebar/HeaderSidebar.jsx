import { useState } from "react"

const Header = () => {
    return (<>
        <div className="flex h-16 shrink-0 items-center">
            <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
        </div>
    </>)
}

export default Header