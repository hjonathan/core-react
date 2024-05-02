import { useState } from "react"
import { useTranslation, initReactI18next } from "react-i18next"
import { InputV, IconButtonFlat, GoogleSVG, SeparatorHz, Button } from "layout"
import { globalProvider, registerGlobalProvider } from "shared"
import { ToastContainer, toast } from "react-toastify"

const Register = ({ childrenRoutes }) => {
    const { t } = useTranslation()
    const api = globalProvider("api")

    const [register, setRegister] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState()

    const model = {
        get: register,
        set: (name, value) => {
            setRegister((prev) => {
                return { ...prev, [name]: value }
            })
        },
    }

    const onSubmit = async () => {
        try {
            const { data } = await api.$i().post("/auth/register", register)
            toast.success(data.message)
        } catch ({ response }) {
            setError(response.data.error)
            toast.error(response.data.message)
        }
    }

    return (
        <div className="flex h-full flex-1">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img
                            className="h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            {t("Register user profile")}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            {t("Please fill all fields")}
                        </p>
                    </div>

                    <div className="mt-10 space-y-6">
                        <InputV
                            name="username"
                            type="text"
                            label={t("Username")}
                            error={error?.username}
                            model={model}
                        />

                        <InputV
                            name="email"
                            type="email"
                            label={t("Email")}
                            error={error?.email}
                            model={model}
                        />

                        <InputV
                            name="password"
                            type="password"
                            label={t("Password")}
                            error={error?.password}
                            model={model}
                        />

                        <Button
                            label={t("Register")}
                            onClick={onSubmit}></Button>

                        <div className="mt-10">
                            <SeparatorHz label={t("Or continue with")} />

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <IconButtonFlat
                                    label={"Google"}
                                    svg={<GoogleSVG />}
                                />

                                <IconButtonFlat
                                    label={"Github"}
                                    path={
                                        <path
                                            fillRule="evenodd"
                                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                            clipRule="evenodd"
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Register
