import { InfoCard } from './InfoCard';

const EducationSection = () => {
    return (
        <>
            <section className="mt-4 flex flex-col items-start gap-y-2 px-4">
                <div className="mb-2 font-space text-3xl font-normal text-text underline">
                    education
                </div>
                <InfoCard
                    primaryIcon="Imperial"
                    primaryTitle="Imperial College London"
                    secondaryTitle="MSc Signal Processing & Machine Learning"
                    subtitles={['2018-2019']}
                />
                <InfoCard
                    primaryIcon="KTH"
                    primaryTitle="KTH Royal Insititue of Technology"
                    secondaryTitle="BSc Electrical & Electronic Engineering"
                    subtitles={['2017-2018 (year abroad)']}
                />
                <InfoCard
                    primaryIcon="EPFL"
                    primaryTitle="Ecole Polytechnique Fédérale de Lausanne"
                    secondaryTitle="BSc Electrical & Electronic Engineering"
                    subtitles={['2014-2018']}
                />
            </section>
        </>
    );
};

export default EducationSection;
