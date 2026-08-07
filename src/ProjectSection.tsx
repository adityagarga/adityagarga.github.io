import { InfoCard } from './InfoCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const ProjectSection = () => {
    return (
        <AnimatedSection>
            <section className="flex flex-col gap-4">
                <h2 className="inline-block border-b-[3px] border-amber-400 pb-0.5 font-space text-2xl font-bold text-text sm:text-3xl">
                    projects
                </h2>
                <StaggerContainer className="flex flex-col gap-3">
                    <StaggerItem>
                        <InfoCard
                            color="yellow"
                            primaryIcon="Waddle"
                            primaryTitle="Waddle"
                            secondaryTitle="Agentic Shared Calendar App"
                            description={[
                                'AI-powered calendar assistant that uses multi-agent orchestration to manage scheduling through natural language. Agents handle intent parsing, conflict resolution, and calendar operations autonomously.',
                            ]}
                            icons={[
                                'Python',
                                'Fastapi',
                                'Typescript',
                                'React',
                                'Reactquery',
                                'Postgresql',
                                'Supabase',
                                'Tailwindcss',
                            ]}
                            link="https://waddlecalendar.com"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <InfoCard
                            color="yellow"
                            primaryEmoji="⌚"
                            primaryTitle="garmin watchfaces"
                            secondaryTitle="Connect IQ Store"
                            description={[
                                'Watch faces and apps for Garmin devices, published on the Connect IQ store — 14 releases with 490+ downloads and a 4.8★ average rating.',
                            ]}
                            link="https://apps.garmin.com/developer/a36325d1-0e06-4708-9fe6-c7c3c55f0034/apps"
                        />
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </AnimatedSection>
    );
};

export default ProjectSection;
