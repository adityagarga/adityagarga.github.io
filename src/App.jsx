function App() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8">
                {/* Header Section */}
                <header className="bg-blue-600 text-white py-6 rounded-lg shadow-md">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold">Aditya Garga</h1>
                        <p className="text-lg mt-2">
                            Full-Stack Software & Signal Processing Engineer
                        </p>
                        <div className="mt-4 space-x-4">
                            <a
                                href="https://www.linkedin.com/in/aditya-garga"
                                className="hover:text-gray-300"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/adityagarga"
                                className="hover:text-gray-300"
                            >
                                GitHub
                            </a>
                            <a
                                href="mailto:adityagargawork@gmail.com"
                                className="hover:text-gray-300"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </header>

                {/* About Section */}
                <section className="my-12 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        About Me
                    </h2>
                    <p className="text-lg leading-relaxed text-center">
                        I am a passionate software engineer with expertise in
                        full-stack development, data engineering, and machine
                        learning. With a strong background in electrical and
                        electronic engineering, I continuously seek to push the
                        boundaries of technology and create innovative
                        solutions. Outside of work, I enjoy playing guitar,
                        running, and always staying curious.
                    </p>
                </section>

                {/* Experience Section */}
                <section className="my-12 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        Experience
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold">
                                Full-Stack Software Engineer - Partoo
                            </h3>
                            <p className="text-gray-600">
                                Paris, France | Since Sept 2023
                            </p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>
                                    Developed features to help synchronize store
                                    information across major platforms (Google,
                                    Facebook, Waze).
                                </li>
                                <li>
                                    Engineered and built backend services to
                                    integrate new feature developments for the
                                    store presence management product.
                                </li>
                                <li>
                                    Technologies used: Python 3.12, FastAPI,
                                    Celery, PostgreSQL, React, TypeScript.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">
                                Data Engineer - Celsius Energy
                            </h3>
                            <p className="text-gray-600">
                                Clamart, France | July 2022 - Aug 2023
                            </p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>
                                    Developed workflows for geothermal heating
                                    and cooling solutions.
                                </li>
                                <li>
                                    Implemented and deployed data pipelines for
                                    real-time construction analytics using IoT
                                    sensors.
                                </li>
                                <li>
                                    Technologies used: Python, Spark,
                                    Databricks, Azure, Terraform, Angular,
                                    PowerBI.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">
                                Data Scientist - Schlumberger
                            </h3>
                            <p className="text-gray-600">
                                Clamart, France | Nov 2019 - June 2022
                            </p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>
                                    Developed predictive analytics algorithms
                                    for anomaly detection in drilling
                                    operations.
                                </li>
                                <li>
                                    Implemented real-time algorithms to work
                                    with streaming sensor data for major oil and
                                    gas clients.
                                </li>
                                <li>
                                    Technologies used: Python (numerical
                                    computing, Dash), C#, large-scale data
                                    compute platform.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="my-12 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        Education
                    </h2>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="text-xl font-bold">
                                MSc. Signal Processing - Imperial College London
                            </h3>
                            <p className="text-gray-600">
                                2018-2019 | London, UK
                            </p>
                            <p>
                                Relevant Courses: Digital Signal Processing,
                                Machine Intelligence, Computer Vision.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-xl font-bold">
                                BSc. Electrical and Electronic Engineering -
                                EPFL
                            </h3>
                            <p className="text-gray-600">
                                2014-2018 | Lausanne, Switzerland
                            </p>
                        </li>
                        <li>
                            <h3 className="text-xl font-bold">
                                Year Abroad - KTH Royal Institute of Technology
                            </h3>
                            <p className="text-gray-600">
                                2017-2018 | Stockholm, Sweden
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Skills Section */}
                <section className="my-12 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        Skills
                    </h2>
                    <div className="flex flex-wrap justify-center space-x-6">
                        <div className="text-center">
                            <h3 className="font-bold">Programming Languages</h3>
                            <p>Python, TypeScript, C#, SQL</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold">
                                Full-Stack Development
                            </h3>
                            <p>React, FastAPI, Celery, PostgreSQL</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold">Data Engineering</h3>
                            <p>Spark, Databricks, Streaming Technologies</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold">
                                Machine Learning & Analytics
                            </h3>
                            <p>Keras, TensorFlow, Data Visualization</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="my-12 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        Contact
                    </h2>
                    <div className="text-center">
                        <p>
                            Please email me at:
                        </p>
                        <a
                            href="mailto:adityagargawork@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            adityagargawork@gmail.com
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default App;
