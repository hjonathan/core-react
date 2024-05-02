import axios from "axios"

export default class Api {
    credentials
    eventBus
    baseURL

    constructor(credentials, eventBus, baseURL) {
        this.credentials = credentials
        this.eventBus = eventBus
        this.baseURL = baseURL
    }

    setCredentials(nValue) {
        this.credentials = nValue
    }

    setEventBus(nValue) {
        this.eventBus = nValue
    }

    setBaseURL(nValue) {
        this.baseURL = nValue
    }

    $i() {
        const instance = axios.create({
            baseURL: this.baseURL,
            timeout: 1000,
            headers: { "X-Custom-Header": "foobar" },
        })

        return instance
    }
}
