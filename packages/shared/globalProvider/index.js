const provider = {}

export const globalProvider = (id) => {
    return provider[id]
}

export const registerGlobalProvider = (id, value) => {
    provider[id] = value
}
