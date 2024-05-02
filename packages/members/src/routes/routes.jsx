import { lazy } from "react"

const LazyMemberListPage = lazy(() => import("../pages/MemberList"))

export const routes = [
    {
        path: "/members",
        Component: LazyMemberListPage,
        parent: "/",
    },
]
