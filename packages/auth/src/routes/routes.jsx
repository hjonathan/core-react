import { lazy } from "react"

const LazyRegisterPage = lazy(() => import("../pages/Register"))
const LazyLoginPage = lazy(() => import("../pages/Login"))

export const routes = [
    {
        path: "/register",
        Component: LazyRegisterPage,
    },
    {
        path: "/login",
        Component: LazyLoginPage,
    },
]
