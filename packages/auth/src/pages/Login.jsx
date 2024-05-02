import { useTranslation, initReactI18next } from "react-i18next"
import { useState } from "react"
import { InputV, Button } from "layout"
import { ToastContainer, toast } from "react-toastify"
import { globalProvider } from "shared"

export default function Login() {
    const { t } = useTranslation()
    const api = globalProvider("api")

    const [login, setLogin] = useState({
        username: "",
        password: "",
    })

    const [error, setError] = useState()

    const model = {
        get: login,
        set: (name, value) => {
            setLogin((prev) => {
                return { ...prev, [name]: value }
            })
        },
    }

    const onSubmit = async () => {
        try {
            const { data } = await api.$i().post("/auth/login", login)

            toast.success(data.message)
        } catch ({ response }) {
            setError(response.data.error)

            toast.error(response.data.message)
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="space-y-6 sm:mx-auto sm:w-full sm:max-w-sm mt-10">
                <InputV
                    name="username"
                    type="text"
                    error={error?.username}
                    label={t("Username or email")}
                    model={model}
                />

                <InputV
                    name="password"
                    error={error?.password}
                    label={t("Password")}
                    type="password"
                    model={model}
                    extraLabel={
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>
                    }
                />

                <Button
                    onClick={onSubmit}
                    label={t("Sign in")}
                />

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{" "}
                    <a
                        href="#"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    )
}
