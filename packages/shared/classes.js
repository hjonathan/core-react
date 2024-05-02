import { isFunction, isString, isObject } from "lodash"

export const classNames = (...classes) => {
    const response = classes.map((e) => {
        if (isObject(e)) {
            const str = Object.keys(e).map((index) => {
                return e[index] ? index : ""
            })

            return str.join(" ")
        }

        return e
    })

    return response.filter(Boolean).join(" ")
}
