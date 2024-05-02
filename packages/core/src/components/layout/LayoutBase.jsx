import { Fragment, useState, useContext } from "react"
import { Dialog, Menu, Transition } from "@headlessui/react"
import { Suspense, lazy } from "react"
import { Router } from "router"
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
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import {
    AppHeader,
    IconButton,
    MenuTooltip,
    Searcher,
    Sidebar,
    SidebarResponsive,
} from "layout"

import { globalProvider } from "shared"
import { useDispatch, useSelector } from "react-redux"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

const Page404 = () => {
    return <>404</>
}

function LayoutBase({childrenRoutes}) {

    console.log("BREAK POINT  CHILDREN::", childrenRoutes)
    const useStore = globalProvider("useStore")
    const coreStore = useStore("core")
    const dispatch = useDispatch()

    const counter = useSelector(coreStore.$counter)

    const navigation = [
        {
            name: "Dashboard",
            onClick: () => {
                console.log("CLICK DASHBOARD", useStore("core"))
                dispatch(coreStore.increment())
            },
            href: "#",
            icon: HomeIcon,
            path:"/members",
            current: true,
        },
        { name: "Team", href: "#", icon: UsersIcon, current: false, path:"/jona1", },
        { name: "Projects", href: "#", icon: FolderIcon, current: false, path:"/members2",},
        { name: "Calendar", href: "#", icon: CalendarIcon, current: false, path:"/members3",},
        {
            name: "Documents",
            href: "#",
            icon: DocumentDuplicateIcon,
            current: false,
        },
        { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
    ]
    const teams = [
        { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
        {
            id: 2,
            name: "Tailwind Labs",
            href: "#",
            initial: "T",
            current: false,
        },
        { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
    ]

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [get, set] = useState([
        { name: "Your profile", href: "#" },
        { name: "Sign out", href: "#" },
        { name: "other Option", href: "#" },
    ])

    const userNavigation = {
        get,
        set,
    }

    const clickItem = (item)=>{
        window.location.href= item.path
    }

    return (
        <>
            <div>
                <SidebarResponsive
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}>
                    <Sidebar
                        navigation={navigation}
                        teams={teams}
                        clickItem={clickItem}
                    />
                </SidebarResponsive>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                        <Sidebar
                            navigation={navigation}
                            teams={teams}
                            clickItem={clickItem}
                        />
                    </div>
                </div>

                <div className="lg:pl-72">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button
                            type="button"
                            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                            onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                        {/* Separator */}
                        <div
                            className="h-6 w-px bg-gray-200 lg:hidden"
                            aria-hidden="true"
                        />
                        <AppHeader>
                            <Searcher />
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <IconButton>
                                    <BellIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </IconButton>
                                {/* Separator */}
                                <div
                                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                                    aria-hidden="true"
                                />

                                {/* Profile dropdown */}
                                <MenuTooltip
                                    userNavigation={userNavigation}
                                    button={
                                        <>
                                            <img
                                                className="h-8 w-8 rounded-full bg-gray-50"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <span className="hidden lg:flex lg:items-center">
                                                <span
                                                    className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                                                    aria-hidden="true">
                                                    Tom Cook
                                                </span>
                                                <ChevronDownIcon
                                                    className="ml-2 h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </>
                                    }></MenuTooltip>

                                {/* <Menu
                                    as="div"
                                    className="relative">
                                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        <img
                                            className="h-8 w-8 rounded-full bg-gray-50"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                                            <span
                                                className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                                                aria-hidden="true">
                                                Tom Cook
                                            </span>
                                            <ChevronDownIcon
                                                className="ml-2 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-50"
                                                                    : "",
                                                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                                                            )}>
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu> */}
                            </div>
                        </AppHeader>
                    </div>

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">
                            <Suspense fallback={null}>
                                <Router
                                    routes={childrenRoutes}
                                    defaultComponent={Page404}></Router>
                            </Suspense>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default LayoutBase
