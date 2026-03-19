import { Icon, IconName } from './components/icon';
import { Button } from './components/ui/button';
import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import LifeSection from './LifeSection';
import ProjectSection from './ProjectSection';
import WorkSection from './WorkSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import BlogSection from './blog/BlogSection';
import BlogIndex from './blog/BlogIndex';
import BlogPost from './blog/BlogPost';

const sections: { name: string; icon: IconName; activeColor: string }[] = [
    { name: 'About', icon: 'Contact', activeColor: 'bg-pink-200' },
    { name: 'Work', icon: 'Work', activeColor: 'bg-orange-200' },
    { name: 'Project', icon: 'Project', activeColor: 'bg-amber-200' },
    { name: 'Blog', icon: 'Blog', activeColor: 'bg-cyan-200' },
    { name: 'Education', icon: 'Education', activeColor: 'bg-emerald-200' },
    { name: 'Life', icon: 'Life', activeColor: 'bg-sky-200' },
    { name: 'Contact', icon: 'Email', activeColor: 'bg-violet-200' },
];

const HomePage = () => {
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        About: useRef<HTMLDivElement>(null),
        Work: useRef<HTMLDivElement>(null),
        Education: useRef<HTMLDivElement>(null),
        Project: useRef<HTMLDivElement>(null),
        Blog: useRef<HTMLDivElement>(null),
        Life: useRef<HTMLDivElement>(null),
        Contact: useRef<HTMLDivElement>(null),
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);

            const scrollPosition = window.scrollY + 150;
            let current = '';
            for (const section of sections) {
                const ref = sectionRefs[section.name]?.current;
                if (ref) {
                    const top = ref.offsetTop;
                    const height = ref.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        current = section.name;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (section: string) => {
        const sectionRef = sectionRefs[section]?.current;
        if (sectionRef) {
            sectionRef.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-background">
            {/* Hero Header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex w-full max-w-3xl flex-col items-center justify-center px-4 pb-4 pt-12 text-center sm:pt-20"
            >
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                    className="h-24 w-24 rounded-full border-2 border-black shadow-button-lg sm:h-28 sm:w-28"
                    src="/profile-icon.png"
                    alt="Aditya Garga"
                />
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-4 font-space text-4xl font-bold text-text sm:text-5xl md:text-6xl"
                >
                    Aditya Garga
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    className="mt-2 font-space text-lg text-text-light sm:text-xl"
                >
                    AI engineer &middot; paris
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-3 max-w-md font-space text-sm leading-relaxed text-text-light sm:text-base"
                >
                    Building products with agentic engineering.
                </motion.p>
                {/* Rainbow divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
                    className="mt-6 flex h-1 w-48 overflow-hidden rounded-full sm:w-64"
                >
                    <div className="flex-1 bg-pink-400" />
                    <div className="flex-1 bg-orange-400" />
                    <div className="flex-1 bg-amber-400" />
                    <div className="flex-1 bg-emerald-400" />
                    <div className="flex-1 bg-sky-400" />
                    <div className="flex-1 bg-violet-400" />
                </motion.div>
            </motion.header>

            {/* Sticky Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className={`sticky top-0 z-50 mt-4 flex w-full items-center justify-center transition-all duration-300 ${
                    scrolled
                        ? 'border-b-2 border-black bg-background/95 py-3 backdrop-blur-sm'
                        : 'py-3'
                }`}
            >
                <div className="flex items-center gap-x-1.5 overflow-x-auto px-3 sm:gap-x-3 sm:px-0">
                    {sections.map(({ name, icon, activeColor }) => (
                        <button
                            key={name}
                            onClick={() => scrollToSection(name)}
                            className="group flex flex-col items-center gap-1 px-1 py-1.5 transition-all sm:px-2"
                            aria-label={`Navigate to ${name} section`}
                        >
                            <Button
                                size="default"
                                className={`transition-all ${
                                    activeSection === name
                                        ? `translate-x-[2px] translate-y-[2px] ${activeColor} shadow-none`
                                        : `group-hover:${activeColor}`
                                }`}
                            >
                                <Icon icon={icon} />
                            </Button>
                            <span
                                className={`font-space text-[10px] transition-colors sm:text-xs ${
                                    activeSection === name
                                        ? 'font-bold text-text'
                                        : 'text-text-muted group-hover:text-text'
                                }`}
                            >
                                {name}
                            </span>
                        </button>
                    ))}
                </div>
            </motion.nav>

            {/* Main Content */}
            <main className="flex w-full max-w-3xl flex-col gap-y-16 px-4 py-8 sm:gap-y-20 sm:py-12">
                <div ref={sectionRefs.About}>
                    <AboutSection />
                </div>
                <div ref={sectionRefs.Work}>
                    <WorkSection />
                </div>
                <div ref={sectionRefs.Project}>
                    <ProjectSection />
                </div>
                <div ref={sectionRefs.Blog}>
                    <BlogSection />
                </div>
                <div ref={sectionRefs.Education}>
                    <EducationSection />
                </div>
                <div ref={sectionRefs.Life}>
                    <LifeSection />
                </div>
                <div ref={sectionRefs.Contact}>
                    <ContactSection />
                </div>
            </main>

            <Footer />
        </div>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
};

export default App;
