import { configureStore } from "@reduxjs/toolkit"
import core from "./core"

const stores = {
    core: core,
}

export default configureStore({
    reducer: {
        core: core.reducer,
    },
})

export const useStore = (idStore) => {
    return stores[idStore]
}
