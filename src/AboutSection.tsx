import { AnimatedSection } from './AnimatedSection';

const AboutSection = () => {
    return (
        <AnimatedSection>
            <section className="flex flex-col gap-4">
                <h2 className="inline-block border-b-[3px] border-pink-400 pb-0.5 font-space text-2xl font-bold text-text sm:text-3xl">
                    about
                </h2>
                <div className="flex flex-col gap-4 font-space text-sm leading-relaxed text-text sm:text-base">
                    <p>
                        I'm a software engineer based in Paris with a background spanning data
                        science, data engineering, and full-stack development. I've worked across
                        industries from energy to marketing software to climate tech, and I care
                        about building things that are both technically sound and useful.
                    </p>
                    <p>
                        I studied electrical engineering at EPFL and KTH, then specialized in signal
                        processing and machine learning at Imperial College London. These days I
                        mostly work with Python, TypeScript, React, and various data tools.
                    </p>
                    <p>
                        Outside of work, I play blues guitar, lift weights, run races around Paris
                        and read books.
                    </p>
                </div>
            </section>
        </AnimatedSection>
    );
};

export default AboutSection;
