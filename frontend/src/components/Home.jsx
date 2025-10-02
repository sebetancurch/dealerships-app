function Home() {

    return (
        <main className="flex-1">
            <div className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center mt-22" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhq04jD_YF0ATlFvli_0PvushIXaPMHAzQbs6quSkWTNIdap086FhyPGJA-b5A4LxQO2znt1vbBhJ28vwr0fME0SE628NMwtUxXlYHQ2JsrXeNBkzsvsIEERvX0OUq9FNiP-KoCVXcSTYAUasNCYPouLBRVW4-vvnyI6eyqvrIdwWUiJSWZHkXHbU2xG6ID_8PcrDkXkVVhEBZt071zMv_T0LW5nSyKDMdYBQQFoKoKKpNoFLG36_IYwmzfzqSNw_N2cPgAc8kYxs")' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Welcome to our Dealerships!</h1>
                    <p className="mt-4 max-w-2xl text-base md:text-lg text-background-light/90">Explore our wide selection of new and used vehicles. We offer competitive financing and exceptional customer service.</p>
                    <a className="mt-8 px-8 py-3 text-base font-bold text-white bg-primary hover:bg-primary/90 rounded-lg transition-transform hover:scale-105" href="#">View Dealerships</a>
                </div>
            </div>
        </main>
    )
}

export default Home
