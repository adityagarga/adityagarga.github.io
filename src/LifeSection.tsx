import { InfoCard } from './InfoCard';

const LifeSection = () => {
    return (
        <>
            <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                <div className="mb-2 font-space text-3xl font-normal text-text underline">life</div>
                <InfoCard primaryTitle="playing gutiar" subtitles={['jamming the blues']} />
                <InfoCard
                    primaryTitle="lifting weights and running"
                    subtitles={['Paris Versailles 2022 & 2024', 'Semi Marathon de Paris 2023']}
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
