import { Fragment, useState } from 'react'
import {
    Cog6ToothIcon
} from '@heroicons/react/24/outline'

const UserSettings = () => {
    return (<>
        <a
            href="#"
            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
        >
            <Cog6ToothIcon
                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                aria-hidden="true"
            />
            Settings
        </a>
    </>)
}

export default UserSettings