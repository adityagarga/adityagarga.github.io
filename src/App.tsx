import { Icon, IconName } from './components/icon';
import { Button } from './components/ui/button';
import EducationSection from './EducationSection';
import LifeSection from './LifeSection';
import ProjectSection from './ProjectSection';
import WorkSection from './WorkSection';
import ContactSection from './ContactSection';
import { useRef } from 'react';

const App = () => {
    const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        Work: useRef<HTMLDivElement>(null),
        Education: useRef<HTMLDivElement>(null),
        Project: useRef<HTMLDivElement>(null),
        Life: useRef<HTMLDivElement>(null),
        Contact: useRef<HTMLDivElement>(null),
    };

    const scrollToSection = (section: keyof typeof sectionRefs) => {
        const sectionRef = sectionRefs[section].current;
        if (sectionRef) {
            sectionRef.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const sections: IconName[] = ['Work', 'Project', 'Education', 'Life', 'Contact'];

    return (
        <>
            <div className="flex min-h-screen w-full flex-col items-center bg-background">
                <header className="flex flex-col items-center justify-center py-6 text-center">
                    <img
                        className="relative h-20 w-20 rounded-full border border-black"
                        src="/profile-icon.png"
                    />
                    <div className="font-space text-6xl text-text">Aditya Garga</div>
                    <div className="font-space text-3xl text-text">software engineer</div>
                </header>
                <nav className="flex items-center justify-center gap-x-6 px-4">
                    {sections.map(section => (
                        <div className="flex flex-col items-center justify-center">
                            <Button key={section} onClick={() => scrollToSection(section)}>
                                <Icon icon={section} />
                            </Button>
                            <div className="absolute mt-16 font-space text-xs text-text">
                                {section}
                            </div>
                        </div>
                    ))}
                </nav>
                <main>
                    {sections.map(section => (
                        <div key={section} ref={sectionRefs[section]}>
                            {section === 'Work' && <WorkSection />}
                            {section === 'Education' && <EducationSection />}
                            {section === 'Project' && <ProjectSection />}
                            {section === 'Life' && <LifeSection />}
                            {section === 'Contact' && <ContactSection />}
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
};

export default App;
