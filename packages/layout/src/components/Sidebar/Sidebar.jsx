import { Fragment, useState } from "react"
import { Dialog, Menu, Transition } from "@headlessui/react"
import { navs } from "@/routes/navigation"

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
import HeaderSidebar from "./HeaderSidebar"
import ItemNavigation from "./ItemNavigation"
import ItemTeam from "./ItemTeam"
import UserSettings from "./UserSettings"

const userNavigation = [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
]




function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

const Sidebar = ({ navigation, teams, clickItem}) => {
    return (
        <>
            <HeaderSidebar></HeaderSidebar>
            <nav className="flex flex-1 flex-col">
                <ul
                    role="list"
                    className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul
                            role="list"
                            className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <ItemNavigation item={item} clickItem={clickItem} />
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                        </div>
                        <ul
                            role="list"
                            className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                                <li key={team.name}>
                                    <ItemTeam team={team} />
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="mt-auto">
                        <UserSettings />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar
