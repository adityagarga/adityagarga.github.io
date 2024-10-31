import { Icon } from './components/icon';
import { Button } from './components/ui/button';
import { WorkCard } from './WorkCard';

const App = () => {
    return (
        <>
            <div className="flex min-h-screen w-full flex-col items-center bg-background">
                <header className="flex flex-col items-center justify-center py-6 text-center">
                    <img
                        className="relative h-20 w-20 rounded-full border border-black"
                        src="/profile-icon.png"
                    />
                    <div className="font-space text-6xl text-text">Aditya Garga</div>
                    <div className="font-space text-3xl text-text">software engineer</div>
                </header>
                <nav className="flex items-center justify-center gap-4 px-4">
                    {(['Work', 'Education', 'Project', 'Guitar', 'Contact'] as const).map(
                        iconName => (
                            <Button key={iconName}>
                                <Icon icon={iconName} />
                            </Button>
                        ),
                    )}
                </nav>
                <main>
                    <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                        <div className="mb-2 font-space text-3xl font-normal text-black underline">
                            work
                        </div>
                        <WorkCard
                            primaryIcon="Partoo"
                            primaryTitle="Partoo"
                            secondaryTitle="Full-Stack Engineer"
                            subtitles={['since Sept 2023']}
                            description={[
                                'Developed features to help synchronize store information across major platforms (Google, Facebook, Waze)',
                                'Engineered and built backend services to integrate new feature developments for the store presence management product',
                            ]}
                            icons={[
                                'Python',
                                'Fastapi',
                                'Postgresql',
                                'Typescript',
                                'React',
                                'Reactquery',
                                'Figma',
                            ]}
                        />
                        <WorkCard
                            primaryIcon="Celsius"
                            primaryTitle="Celsius Energy"
                            secondaryTitle="Data Engineer"
                            subtitles={['Jul 2022 till Aug 2023']}
                            description={[
                                'Developed workflows for geothermal heating and cooling solutions',
                                'Implemented and deployed data pipelines for real-time construction analytics using IoT sensors',
                            ]}
                            icons={['Python', 'Azure', 'Databricks', 'Powerbi']}
                        />
                        <WorkCard
                            primaryIcon="Schlumberger"
                            primaryTitle="Schlumberger"
                            secondaryTitle="Data Scientist"
                            subtitles={['Dec 2019 till Jun 2022']}
                            description={[
                                'Developed predictive analytics algorithms for anomaly detection in drilling operations',
                                'Implemented real-time algorithms to work with streaming sensor data for major oil and gas clients',
                            ]}
                            icons={['Python', 'Tensorflow']}
                        />
                    </section>
                    <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                        <div className="mb-2 font-space text-3xl font-normal text-text underline">
                            projects
                        </div>
                        <WorkCard
                            primaryIcon="Superyu"
                            primaryTitle="superyu"
                            secondaryTitle="fitness app"
                            description={[
                                'Full Stack development of a fitness app that helps users track their workouts and progress',
                            ]}
                            icons={['Supabase', 'Python', 'Fastapi', 'Typescript', 'React', 'Reactquery', 'Tailwindcss', 'Figma']}
                        />
                    </section>
                    <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                        <div className="mb-2 font-space text-3xl font-normal text-text underline">
                            education
                        </div>
                        <WorkCard
                            primaryTitle="Imperial College London"
                            secondaryTitle="MSc Signal Processing & Machine Learning"
                            subtitles={['2018-2019']}
                        />
                        <WorkCard
                            primaryTitle="KTH Royal Insititue of Technology"
                            secondaryTitle="BSc Electrical & Electronic Engineering"
                            subtitles={['2017-2018 (year abroad)']}
                        />
                        <WorkCard
                            primaryTitle="EPFL"
                            secondaryTitle="BSc Electrical & Electronic Engineering"
                            subtitles={['2014-2018']}
                        />
                    </section>
                    <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                        <div className="mb-2 font-space text-3xl font-normal text-text underline">
                            life
                        </div>
                        <WorkCard primaryTitle="playing gutiar" subtitles={['jamming the blues']} />
                        <WorkCard
                            primaryTitle="lifting weights and running"
                            subtitles={[
                                'Paris Versailles 2022 & 2024',
                                'Semi Marathon de Paris 2023',
                            ]}
                        />
                    </section>
                    <section className="relative flex justify-end px-4">
                        <img
                            src="/jimmy.png"
                            alt="Jimmy"
                            className="absolute right-0 top-[-44px] h-auto w-32"
                        />
                    </section>
                    <section className="my-4 flex flex-col items-start gap-y-2 px-4">
                        <div className="mb-2 font-space text-3xl font-normal text-text underline">
                            contact
                        </div>
                        <div className="flex items-center justify-center gap-4 px-4">
                            {(['Email', 'Linkedin'] as const).map(iconName => (
                                <Button key={iconName}>
                                    <Icon icon={iconName} />
                                </Button>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default App;
