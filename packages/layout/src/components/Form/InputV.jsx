import { useState } from "react"
import { classNames } from "shared"

const InputV = ({ name, model, type = "text", label, error, extraLabel }) => {
    const onChange = (e) => {
        model.set(name, e.target.value)
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <label
                    htmlFor={name}
                    className={classNames(
                        "block text-sm font-medium leading-6 text-gray-900",
                        {
                            "text-gray-900": !error,
                            "text-red-600": error,
                        }
                    )}>
                    {label}
                </label>
                {extraLabel}
            </div>

            <div className="mt-2">
                <input
                    onChange={onChange}
                    value={model.get[name]}
                    id={name}
                    name={name}
                    type={type}
                    required
                    className={classNames(
                        'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6"',
                        {
                            "bg-red-200 focus:ring-red-600": error,
                            "focus:ring-indigo-600": !error,
                        }
                    )}
                />
            </div>
        </div>
    )
}

export default InputV
