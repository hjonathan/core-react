import React from "react"
import { createRoot } from "react-dom/client"
import i18n from "i18next"
import { useTranslation, initReactI18next } from "react-i18next"

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next",
                },
            },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    })
