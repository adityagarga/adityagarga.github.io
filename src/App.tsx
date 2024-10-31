import { WorkCard } from './WorkCard';

const App = () => {
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
                        <WorkCard
                            companyName="Partoo"
                            jobTitle="Full-Stack Engineer"
                            description={[
                                'Developed features to help synchronize store information across major platforms (Google, Facebook, Waze)',
                                'Engineered and built backend services to integrate new feature developments for the store presence management product',
                            ]}
                            icons={[
                                '',
                                '/path/to/icon2.png',
                                '/path/to/icon3.png',
                                '/path/to/icon4.png',
                                '/path/to/icon5.png',
                            ]}
                        />
                        <WorkCard
                            companyName="Celsius Energy"
                            jobTitle="Data Engineer"
                            description={[
                                'Developed workflows for geothermal heating and cooling solutions',
                                'Implemented and deployed data pipelines for real-time construction analytics using IoT sensors',
                            ]}
                            icons={[
                                '',
                                '/path/to/icon2.png',
                                '/path/to/icon3.png',
                                '/path/to/icon4.png',
                                '/path/to/icon5.png',
                            ]}
                        />
                        <WorkCard
                            companyName="Schlumberger"
                            jobTitle="Data Scientist"
                            description={[
                                'Developed predictive analytics algorithms for anomaly detection in drilling operations',
                                'Implemented real-time algorithms to work with streaming sensor data for major oil and gas clients',
                            ]}
                            icons={[
                                '',
                                '/path/to/icon2.png',
                                '/path/to/icon3.png',
                                '/path/to/icon4.png',
                                '/path/to/icon5.png',
                            ]}
                        />
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
