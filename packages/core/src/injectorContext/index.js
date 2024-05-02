import { createContext } from "react"
import { useStore } from "../stores"

export default createContext({
    useStore: null,
})

export const value = { useStore }
