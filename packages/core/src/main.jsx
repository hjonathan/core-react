import React, { createContext } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import store from "./stores"
import { Provider } from "react-redux"
import InjectorContext, { value } from "./injectorContext"
import "./globalProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <InjectorContext.Provider value={value}>
                <App />
            </InjectorContext.Provider>
        </Provider>
    </React.StrictMode>
)
