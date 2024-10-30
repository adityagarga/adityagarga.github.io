function App() {
    return (
        <>
            <div className="flex min-h-screen w-full flex-col items-center bg-stone-50">
                <header className="flex flex-col items-center justify-center py-6 text-center">
                    <img
                        className="relative h-20 w-20 rounded-full border border-black"
                        src="/profile-icon.png"
                    />
                    <div className="font-space text-6xl text-black">Aditya Garga</div>
                    <div className="font-space text-3xl text-black">software engineer</div>
                </header>
                <nav className="flex items-center justify-center gap-4 px-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                </nav>
                <main>
                    <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                        <div className="mb-2 font-space text-3xl font-normal text-black underline">
                            work
                        </div>
                        <div className="flex max-w-xl flex-col gap-3 rounded border border-black bg-orange-50 px-8 py-4">
                            <div className="flex flex-wrap items-center">
                                <div className="mr-2 flex">
                                    <div className="mr-2 h-8 w-8 bg-pink-500"></div>
                                    <span className="font-space text-xl font-bold text-black">
                                        Partoo
                                    </span>
                                </div>
                                <div>
                                    <span className="font-space text-xl font-normal text-black">
                                        Full-Stack Software Engineer
                                    </span>
                                </div>
                            </div>
                            <div>
                                <ul className="list-inside list-disc font-space text-base font-normal text-black">
                                    <li>
                                        Developed features to help synchronize store information
                                        across major platforms (Google, Facebook, Waze)
                                    </li>
                                    <li>
                                        Engineered and built backend services to integrate new
                                        feature developments for the store presence management
                                        product
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                            </div>
                        </div>
                        <div className="flex max-w-xl flex-col gap-3 rounded border border-black bg-orange-50 px-8 py-4">
                            <div className="flex flex-wrap items-center">
                                <div className="mr-2 flex">
                                    <div className="mr-2 h-8 w-8 bg-pink-500"></div>
                                    <span className="font-space text-xl font-bold text-black">
                                        Celsius Energy
                                    </span>
                                </div>
                                <div>
                                    <span className="font-space text-xl font-normal text-black">
                                        Data Engineer
                                    </span>
                                </div>
                            </div>
                            <div>
                                <ul className="list-inside list-disc font-space text-base font-normal text-black">
                                    <li>
                                        Developed workflows for geothermal heating and cooling
                                        solutions
                                    </li>
                                    <li>
                                        Implemented and deployed data pipelines for real-time
                                        construction analytics using IoT sensors
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"></div>
                            </div>
                        </div>
                    </section>
                    <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                        <div className="mb-2 font-space text-3xl font-normal text-black underline">
                            projects
                        </div>
                    </section>
                    <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                        <div className="mb-2 font-space text-3xl font-normal text-black underline">
                            education
                        </div>
                    </section>
                    <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                        <div className="mb-2 font-space text-3xl font-normal text-black underline">
                            life
                        </div>
                    </section>
                    <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                        <div className="mb-2 font-space text-3xl font-normal text-black underline">
                            contact
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default App;
