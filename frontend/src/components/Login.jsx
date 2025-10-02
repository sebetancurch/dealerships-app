import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

function Login() {

    const navigate = useNavigate()
    const { login } = useAuth()

    const [serverError, setServerError] = useState(false)
    const [clientError, setClientError] = useState(null)

    const login_ = async (e) => {
        e.preventDefault()
        setServerError(false)
        setClientError(null)

        const username = e.target.username.value
        const password = e.target.password.value

        try {
            let response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })

            const data = await response.json()

            if (response.status === 200) {
                login(data)
                navigate('/')
            } else {
                setClientError(data.error)
            }
        } catch (error) {
            setServerError(true)
            console.log(error)
        }

    }

    return (
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-background-light dark:bg-background-dark p-10 rounded-xl border border-border-light dark:border-border-dark">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-text-light dark:text-text-dark">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-center text-sm text-subtle-light dark:text-subtle-dark">
                        Sign in to continue to Dealerships
                    </p>
                </div>
                <form onSubmit={login_} className="mt-8 space-y-6" method="POST">
                    <input name="remember" type="hidden" value="true" />
                    <div className="rounded-lg shadow-sm -space-y-px">
                        <div>
                            <label className="sr-only" htmlFor="username-address">Username</label>
                            <input autoComplete="username" className="appearance-none rounded-t-lg relative block w-full px-3 py-4 border border-border-light dark:border-border-dark placeholder-subtle-light dark:placeholder-subtle-dark text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" id="username-address" name="username" placeholder="Username" required="" type="text" />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="password">Password</label>
                            <input autoComplete="current-password" className="appearance-none rounded-b-lg relative block w-full px-3 py-4 border border-border-light dark:border-border-dark placeholder-subtle-light dark:placeholder-subtle-dark text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" id="password" name="password" placeholder="Password" required="" type="password" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a className="font-medium text-primary hover:text-primary/80" href="#">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark" type="submit">
                            Sign In
                        </button>
                    </div>
                    {
                        serverError &&
                        <p className="text-red-500">An unexpected error has occured</p>
                    }
                    {
                        clientError &&
                        <p className="text-red-500">{clientError}</p>
                    }
                </form>
                <div className="text-sm text-center">
                    <p className="text-subtle-light dark:text-subtle-dark">Don't have an account? <a className="font-medium text-primary hover:text-primary/80" href="/register">Sign up</a></p>
                </div>
            </div>
        </main>
    )
}

export default Login