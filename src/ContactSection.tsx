import { Icon } from './components/icon';
import { Button } from './components/ui/button';
import { AnimatedSection } from './AnimatedSection';

const contactLinks = [
    {
        icon: 'Email' as const,
        label: 'Email',
        hoverColor: 'md:hover:bg-pink-200',
        action: () => {
            window.location.href = 'mailto:adityagargawork@gmail.com';
        },
    },
    {
        icon: 'Linkedin' as const,
        label: 'LinkedIn',
        hoverColor: 'md:hover:bg-sky-200',
        action: () => {
            window.open('https://linkedin.com/in/aditya-garga', '_blank', 'noopener,noreferrer');
        },
    },
    {
        icon: 'Github' as const,
        label: 'GitHub',
        hoverColor: 'md:hover:bg-violet-200',
        action: () => {
            window.open('https://github.com/adityagarga', '_blank', 'noopener,noreferrer');
        },
    },
];

const ContactSection = () => {
    return (
        <AnimatedSection>
            <section className="flex flex-col gap-4">
                <h2 className="inline-block border-b-[3px] border-violet-400 pb-0.5 font-space text-2xl font-bold text-text sm:text-3xl">
                    contact
                </h2>
                <p className="font-space text-sm text-text-light sm:text-base">
                    Feel free to reach out -- I'm always happy to chat about interesting projects,
                    opportunities, or just to say hi.
                </p>
                <div className="flex items-center gap-4">
                    {contactLinks.map(({ icon, label, hoverColor, action }) => (
                        <button
                            key={label}
                            onClick={action}
                            className="group flex flex-col items-center gap-1.5"
                            aria-label={label}
                        >
                            <Button className={`transition-all ${hoverColor}`}>
                                <Icon icon={icon} />
                            </Button>
                            <span className="font-space text-xs text-text-muted transition-colors group-hover:text-text-light">
                                {label}
                            </span>
                        </button>
                    ))}
                </div>
            </section>
        </AnimatedSection>
    );
};

export default ContactSection;
