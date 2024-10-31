import { Icon } from './components/icon';
import { Button } from './components/ui/button';

const ContactSection = () => {
    const handleEmailClick = () => {
        // Create a new email to the specified address
        window.location.href = 'mailto:adityagargawork@gmail.com';
    };

    const handleLinkedInClick = () => {
        // Redirect to the LinkedIn profile
        window.open('https://linkedin.com/in/aditya-garga', '_blank');
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
                </div>
            </section>
        </>
    );
};

export default ContactSection;
