import { InfoCard } from './InfoCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const WorkSection = () => {
    return (
        <AnimatedSection>
            <section className="flex flex-col gap-4">
                <h2 className="inline-block border-b-[3px] border-orange-400 pb-0.5 font-space text-2xl font-bold text-text sm:text-3xl">
                    work
                </h2>
                <StaggerContainer className="flex flex-col gap-3">
                    <StaggerItem>
                        <InfoCard
                            color="orange"
                            primaryIcon="Carbonfact"
                            primaryTitle="Carbonfact"
                            secondaryTitle="Data Scientist"
                            subtitles={['June 2025 - Present']}
                            description={[
                                'Working at Carbonfact as a Data Scientist to help decarbonize the fashion industry',
                            ]}
                            link="https://www.carbonfact.com"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <InfoCard
                            color="orange"
                            primaryIcon="Partoo"
                            primaryTitle="Partoo"
                            secondaryTitle="Full-Stack Engineer"
                            subtitles={['Sept 2023 - Apr 2025']}
                            description={[
                                'Developed features to synchronize store information across major platforms (Google, Facebook, Waze)',
                                'Engineered backend services and integrated new feature developments for the store presence management product',
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
                            link="https://www.partoo.co"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <InfoCard
                            color="orange"
                            primaryIcon="Celsius"
                            primaryTitle="Celsius Energy"
                            secondaryTitle="Data Engineer"
                            subtitles={['Jul 2022 - Aug 2023']}
                            description={[
                                'Developed workflows for geothermal heating and cooling solutions',
                                'Implemented and deployed data pipelines for real-time construction analytics using IoT sensors',
                            ]}
                            icons={['Python', 'Azure', 'Databricks', 'Powerbi']}
                            link="https://celsiusenergy.com/us/homepage/"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <InfoCard
                            color="orange"
                            primaryIcon="Schlumberger"
                            primaryTitle="Schlumberger"
                            secondaryTitle="Data Scientist"
                            subtitles={['Dec 2019 - Jun 2022']}
                            description={[
                                'Developed predictive analytics algorithms for anomaly detection in drilling operations',
                                'Implemented real-time algorithms for streaming sensor data for major oil and gas clients',
                            ]}
                            icons={['Python', 'Tensorflow']}
                            link="https://www.slb.com"
                        />
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </AnimatedSection>
    );
};

export default WorkSection;
