import { globalProvider, registerGlobalProvider } from "shared"
import injectorContext from "../injectorContext"
import { useStore } from "../stores"
import api from "../api/index"

registerGlobalProvider("injector", injectorContext)
registerGlobalProvider("useStore", useStore)
registerGlobalProvider("api", api)
