import { lazy } from "react"
const LazyLayout = lazy(() => import("../components/layout/LayoutBase"))
const LazyHome = lazy(() => import("../components/layout/Home"))


export default [
    {
        path: "/",
        Component: LazyLayout,
    },
    {
        path: "/home",
        Component: LazyHome,
        parent:"/"
    },
]
