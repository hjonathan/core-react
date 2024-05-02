import Modules from "../register"

const navDefault =  [
    {
        path: "/",
        name: "Root"
    },
    {
        path: "/home",
        name:"Home"
    },
]


const loadNavigation = () => {
    const keys = Object.keys(Modules)

    let navsArray = []

    keys.forEach((e) => {
        navsArray = navsArray.concat(Modules[e]?.navs)
    })

    return navDefault.concat(navsArray)       
}

export const navs = loadNavigation()
