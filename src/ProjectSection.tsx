import { InfoCard } from './InfoCard';

const ProjectSection = () => {
    return (
        <>
            <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                <div className="mb-2 font-space text-3xl font-normal text-text underline">
                    projects
                </div>
                <InfoCard
                    primaryIcon="Superyu"
                    primaryTitle="superyu"
                    secondaryTitle="fitness app"
                    description={[
                        'Full Stack development of a fitness app that helps users plan and track their workouts',
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
                />
            </section>
        </>
    );
};

export default ProjectSection;
