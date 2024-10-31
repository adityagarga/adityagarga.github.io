type WorkCardProps = {
    primaryIcon: boolean;
    primaryTitle: string;
    secondaryTitle?: string;
    subtitles?: string[]; // Optional subtitles
    description?: string[]; // Optional description
    icons?: string[]; // Optional icons
};

export const WorkCard = ({
    primaryIcon,
    primaryTitle,
    secondaryTitle,
    subtitles = [],
    description = [],
    icons = [],
}: WorkCardProps) => {
    return (
        <div className="flex w-full max-w-xl flex-col gap-3 rounded border border-black bg-orange-50 px-8 py-4">
            {/* Company and Job Title */}
            <div className="flex flex-col flex-wrap">
                <div className="flex flex-wrap items-center">
                    <div className="mr-2 flex items-center">
                        {primaryIcon && (
                            <div className="mr-2 min-h-8 min-w-8 bg-pink-500">
                                {/* <img src={primaryIcon} alt="icon" className="h-full w-full object-cover" /> */}
                            </div>
                        )}
                        <span className="font-space text-xl font-bold text-black">
                            {primaryTitle}
                        </span>
                    </div>
                    {secondaryTitle && (
                        <div>
                            <span className="font-space text-xl font-normal text-black">
                                {secondaryTitle}
                            </span>
                        </div>
                    )}
                </div>
                {/* Subtitles */}
                {subtitles.length > 0 && (
                    <div className="font-space text-base font-medium text-black">
                        {subtitles.map((subtitle, index) => (
                            <div key={index}>{subtitle}</div>
                        ))}
                    </div>
                )}
            </div>

            {/* Description */}
            {description.length > 0 && (
                <div>
                    <ul className="list-inside list-disc font-space text-base font-normal text-black">
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Icons */}
            {icons.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {icons.map((icon, index) => (
                        <div
                            key={index}
                            className="inline-flex size-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button"
                        >
                            {/* <img src={icon} alt="icon" className="h-full w-full object-cover" /> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
