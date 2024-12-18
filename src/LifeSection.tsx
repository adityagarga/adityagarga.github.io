import { InfoCard } from './InfoCard';

const LifeSection = () => {
    return (
        <>
            <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                <div className="mb-2 font-space text-3xl font-normal text-text underline">life</div>
                <InfoCard
                    primaryIcon={'Strat'}
                    primaryTitle="Playing guitar"
                    subtitles={['Jamming the blues, favorite artists: BB King, Jimi Hendrix, SRV, John Mayer']}
                />
                <InfoCard
                    primaryIcon={'Running'}
                    primaryTitle="Weight lifting and running"
                    subtitles={['Paris Versailles 16.2km (2022, 2024)', 'Semi de Paris 21.1km (2023)']}
                />
            </section>
            <div className="relative flex justify-end px-4">
                <img
                    src="/jimmy.png"
                    alt="Jimmy"
                    className="absolute right-0 top-[-24px] h-auto w-24"
                />
            </div>
        </>
    );
};

export default LifeSection;
