import { Icon } from './components/icon';
import { Button } from './components/ui/button';

const ContactSection = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:adityagargawork@gmail.com';
    };

    const handleLinkedInClick = () => {
        window.open('https://linkedin.com/in/aditya-garga', '_blank');
    };

    const handleGitHubClick = () => {
        window.open('https://github.com/adityagarga', '_blank');
    };

    return (
        <>
            <section className="my-4 flex flex-col items-start gap-y-2 px-4">
                <div className="mb-2 font-space text-3xl font-normal text-text underline">
                    contact
                </div>
                <div className="flex items-center justify-center gap-4 px-4">
                    <Button onClick={handleEmailClick}>
                        <Icon icon={'Email'} />
                    </Button>
                    <Button onClick={handleLinkedInClick}>
                        <Icon icon={'Linkedin'} />
                    </Button>
                    <Button onClick={handleGitHubClick}>
                        <Icon icon={'Github'} />
                    </Button>
                </div>
            </section>
        </>
    );
};

export default ContactSection;
