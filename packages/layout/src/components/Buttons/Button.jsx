import { useState } from "react"
import SpinnerSVG from "../svg/Spinner"

const Button = ({ onClick, label }) => {
    const [loading, setLoading] = useState(false)

    const clickSelf = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        await onClick()

        setLoading(false)
    }

    return (
        <button
            onClick={clickSelf}
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {!loading ? label : <SpinnerSVG></SpinnerSVG>}
        </button>
    )
}

export default Button
