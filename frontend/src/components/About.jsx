function About() {
    return (
        <main className="flex-grow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Our Team</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Welcome to Best Cars dealership, home to the best cars in North America. We deal in sale of domestic and imported cars at reasonable prices.
                    </p>
                </div>
                <div className="mt-12 md:mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-lg overflow-hidden text-center transition-transform hover:scale-105 duration-300">
                            <div className="relative h-48">
                                <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdllmd_JSmN8ultgt3yi2ZN2mBh7xr-e3ksknRDxAB20SweDErEn7UE41LtEYZBwvkh-hc7AYL7pdT_GSROQiKuEKZrS7TWmzijnkEwnItsUDNidP1VJT1adnPpByefJ739RrUbegNH9RM0CuGs6xPF3teAzoMuMA5lLQ5cUqRD8wSRx3q0_X3ffxN9Y-sQYZQMOpBQC-iwx4srcsU1f8O0djs-gEAb0AO7Yvai3P_HoJ8VbwSnSai-cKjFM8CLBkv2Bis_IFz1TQ")' }}></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Michael Chen</h3>
                                <p className="text-primary font-semibold mt-1">General Manager</p>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">michael.chen@autohaus.com</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-lg overflow-hidden text-center transition-transform hover:scale-105 duration-300">
                            <div className="relative h-48">
                                <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwtEVwVhmiHIiI04lNcFIa6tI1nuC84l6jWAxnn2xeDxZzxZPgTWE3drzKAmU7JJdJqyoizQKWW06RDub34KpyCI1dKUzait4HLJ7PilM3mPx16eiXbOvrHyuWsGCJnrVZ_RdzwcaZ3a6rfpNSL8QPVf3SiCbIZ3Y-njGRiOhnyNR6ARTbMDlweaq-xdusbLasce6-mgc_CvUgsOsi09cOcbL3YNHb1ZkCo8IknqrZspm5HEKEhm8V-pbw-hH6rb-A6CDMpMvKDyE")' }}></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sarah Rodriguez</h3>
                                <p className="text-primary font-semibold mt-1">Sales Manager</p>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">sarah.rodriguez@autohaus.com</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-lg overflow-hidden text-center transition-transform hover:scale-105 duration-300">
                            <div className="relative h-48">
                                <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACpjKI1-yD-aRl-nbih-5J9Q8aMRBihuPZ2VGTBRQRhZBGWQ4PFQyaAGERuXmZkPoG9yMx339WJcZzJuWx8CkJRlDAKstr3HBz4LepY5cVMpukvET0RWYz9O7nnd6DSTbS22CAENEOPckdR4EWgD82WizN8RAws9gasD7awfrpI6UD8XR7kttPbFqfY333XvimS-RH9j91lznuebVKl_fFtlaUq18gzrMeNwmwd9TRxHy1fPqPTA7DM3QdyUw5Qw516bzFK0wOcP4")' }}></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">David Lee</h3>
                                <p className="text-primary font-semibold mt-1">Service Manager</p>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">david.lee@autohaus.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About