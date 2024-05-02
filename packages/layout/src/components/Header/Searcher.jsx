import { Fragment, useState } from "react"
import { Dialog, Menu, Transition } from "@headlessui/react"
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline"
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid"

const Searcher = () => {
    return (
        <>
            <div className="relative flex flex-1">
                <label
                    htmlFor="search-field"
                    className="sr-only">
                    Search
                </label>
                <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                />
                <input
                    id="search-field"
                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    name="search"
                />
            </div>
        </>
    )
}

export default Searcher
