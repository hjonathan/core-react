import { Suspense, lazy } from "react"
import { Router } from "router"
import "./App.css"
import "./i18n"
import { routes } from "./routes/routes"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const Page404 = () => {
    return <>404</>
}

const App = () => {
    return (
        <>
            <Suspense fallback={null}>
                <Router
                    routes={routes}
                    defaultComponent={Page404}></Router>
            </Suspense>
            <ToastContainer />
        </>
    )
}

export default App
