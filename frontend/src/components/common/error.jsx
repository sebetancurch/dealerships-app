import { useNavigate } from "react-router-dom"

function Error({ error }) {

    const navigate = useNavigate()

    return (
        <main class="flex-1 flex items-center justify-center text-center px-4 py-16 sm:px-6 lg:px-8">
            <div class="max-w-lg w-full flex flex-col items-center gap-8">
                <div class="p-6 bg-primary/10 dark:bg-primary/20 rounded-full">
                    <span class="material-symbols-outlined text-primary text-6xl"> error </span>
                </div>
                <div class="flex flex-col gap-4">
                    <h1 class="text-4xl font-bold tracking-tighter">Unespexcepted Error</h1>
                    <p class="text-lg text-foreground-light/80 dark:text-foreground-dark/80">
                        {error || "We're sorry, there was an unexpected error while processing your request."}
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                    <button class="flex-1 flex items-center justify-center gap-2 rounded-lg h-12 px-6 text-base font-bold bg-primary text-white hover:bg-primary/90 transition-colors"
                        onClick={() => navigate('/')}>
                        <span class="material-symbols-outlined"> home </span>
                        <span>Go to Homepage</span>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Error