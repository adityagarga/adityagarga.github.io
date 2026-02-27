import { InfoCard } from './InfoCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const EducationSection = () => {
    return (
        <AnimatedSection>
            <section className="flex flex-col gap-4">
                <h2 className="inline-block border-b-[3px] border-emerald-400 pb-0.5 font-space text-2xl font-bold text-text sm:text-3xl">
                    education
                </h2>
                <StaggerContainer className="flex flex-col gap-3">
                    <StaggerItem>
                        <InfoCard
                            color="green"
                            primaryIcon="Imperial"
                            primaryTitle="Imperial College London"
                            secondaryTitle="MSc Signal Processing & Machine Learning"
                            subtitles={['2018 - 2019']}
                            link="https://www.imperial.ac.uk"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <InfoCard
                            color="green"
                            primaryIcon="KTH"
                            primaryTitle="KTH Royal Institute of Technology"
                            secondaryTitle="BSc Electrical & Electronic Engineering"
                            subtitles={['2017 - 2018 (year abroad)']}
                            link="https://www.kth.se/en"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <InfoCard
                            color="green"
                            primaryIcon="EPFL"
                            primaryTitle="Ecole Polytechnique Federale de Lausanne"
                            secondaryTitle="BSc Electrical & Electronic Engineering"
                            subtitles={['2014 - 2018']}
                            link="https://www.epfl.ch/en"
                        />
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </AnimatedSection>
    );
};

export default EducationSection;
