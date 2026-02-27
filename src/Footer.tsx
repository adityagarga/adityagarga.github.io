const Footer = () => {
    return (
        <footer className="mt-8 w-full border-t-2 border-black py-6">
            <div className="mx-auto flex max-w-3xl items-center justify-center px-4">
                <p className="font-space text-xs text-text-muted">
                    &copy; {new Date().getFullYear()} Aditya Garga
                </p>
            </div>
        </footer>
    );
};

export default Footer;
