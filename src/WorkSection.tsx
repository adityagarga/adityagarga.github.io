import { InfoCard } from './InfoCard';

const WorkSection = () => {
    return (
        <>
            <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                <div className="mb-2 font-space text-3xl text-black underline">work</div>
                <InfoCard
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
                <InfoCard
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
                <InfoCard
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
        </>
    );
};

export default WorkSection;
