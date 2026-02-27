import { InfoCard } from './InfoCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const LifeSection = () => {
    return (
        <AnimatedSection>
            <section className="flex flex-col gap-4">
                <h2 className="inline-block border-b-[3px] border-sky-400 pb-0.5 font-space text-2xl font-bold text-text sm:text-3xl">
                    life
                </h2>
                <StaggerContainer className="flex flex-col gap-3">
                    <StaggerItem>
                        <InfoCard
                            color="blue"
                            primaryIcon="Strat"
                            primaryTitle="Playing guitar"
                            subtitles={[
                                'Jamming the blues. Favorite artists: BB King, Jimi Hendrix, SRV, John Mayer',
                            ]}
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <InfoCard
                            color="blue"
                            primaryIcon="Running"
                            primaryTitle="Weight lifting and running"
                            subtitles={[
                                'Paris Versailles 16.2km (2022, 2024)',
                                'Semi de Paris 21.1km (2023)',
                            ]}
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <InfoCard
                            color="blue"
                            primaryIcon="Book"
                            primaryTitle="Reading"
                            subtitles={[
                                'Sci-fi, thrillers, non-fiction. 48-book challenge for 2026.',
                                'Favorites: Project Hail Mary, Dark Matter, 11/22/63',
                            ]}
                            link="https://www.goodreads.com/user/show/180274108-aditya-garga"
                        />
                    </StaggerItem>
                </StaggerContainer>
                <div className="mt-2 flex justify-end">
                    <img
                        src="/jimmy.png"
                        alt="Jimmy"
                        className="h-auto w-20 opacity-80 transition-opacity hover:opacity-100 sm:w-24"
                    />
                </div>
            </section>
        </AnimatedSection>
    );
};

export default LifeSection;
