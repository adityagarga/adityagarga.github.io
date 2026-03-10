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
                            primaryEmoji="🎸"
                            primaryTitle="guitar-view"
                            secondaryTitle="Fretboard Visualizer"
                            description={[
                                'Guitar fretboard visualizer showing intervals relative to chord progressions, with a built-in metronome and voice leading.',
                            ]}
                            icons={['Typescript', 'React', 'Tailwindcss']}
                            link="https://adityagarga.com/guitar-view/"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <InfoCard
                            color="yellow"
                            primaryIcon="Superyu"
                            primaryTitle="superyu"
                            secondaryTitle="Fitness App"
                            description={[
                                'Full-stack fitness app that helps users plan and track their workouts. Built from the ground up with a focus on clean UX and reliable performance.',
                            ]}
                            icons={[
                                'Supabase',
                                'Python',
                                'Fastapi',
                                'Typescript',
                                'React',
                                'Reactquery',
                                'Tailwindcss',
                                'Figma',
                            ]}
                            link="https://github.com/adityagarga"
                        />
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </AnimatedSection>
    );
};

export default ProjectSection;
