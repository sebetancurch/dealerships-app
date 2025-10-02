export default function Register() {
    return (
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground-light dark:text-foreground-dark">Create your account</h2>
                </div>
                <form action="#" className="mt-8 space-y-6" method="POST">
                    <div className="rounded-lg shadow-sm -space-y-px">
                        <div>
                            <label className="sr-only" htmlFor="full-name">Full Name</label>
                            <input className="appearance-none rounded-none relative block w-full px-3 py-3 border-0 bg-input-light dark:bg-input-dark placeholder-subtle-light dark:placeholder-subtle-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm rounded-t-lg" id="full-name" name="name" placeholder="Full Name" required="" type="text" />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="email-address">Email address</label>
                            <input autoComplete="email" className="appearance-none rounded-none relative block w-full px-3 py-3 border-0 bg-input-light dark:bg-input-dark placeholder-subtle-light dark:placeholder-subtle-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" id="email-address" name="email" placeholder="Email address" required="" type="email" />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="password">Password</label>
                            <input autoComplete="current-password" className="appearance-none rounded-none relative block w-full px-3 py-3 border-0 bg-input-light dark:bg-input-dark placeholder-subtle-light dark:placeholder-subtle-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm rounded-b-lg" id="password" name="password" placeholder="Password" required="" type="password" />
                        </div>
                    </div>
                    <div>
                        <button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors" type="submit">
                            Register
                        </button>
                    </div>
                    <div className="text-sm text-center">
                        <a className="font-medium text-primary hover:text-primary/90" href="/login">
                            Already have an account? Sign in
                        </a>
                    </div>
                </form>
            </div>
        </main>
    )
}