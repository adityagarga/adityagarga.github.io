import { Icon, IconName } from './components/icon';
import { Button } from './components/ui/button';

type WorkCardProps = {
    primaryIcon?: IconName;
    primaryTitle: string;
    secondaryTitle?: string;
    subtitles?: string[];
    description?: string[];
    icons?: IconName[];
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
        <div className="flex w-full max-w-xl flex-col gap-3 rounded border border-black bg-background-card px-8 py-4">
            <div className="flex flex-col flex-wrap">
                <div className="flex flex-wrap items-center">
                    <div className="mr-2 flex items-center">
                        {primaryIcon && (
                            <Button size={'medium'} className="mr-2 min-h-10 min-w-10">
                                <Icon icon={primaryIcon} />
                            </Button>
                        )}
                        <span className="font-space text-xl font-bold text-text">
                            {primaryTitle}
                        </span>
                    </div>
                    {secondaryTitle && (
                        <div>
                            <span className="font-space text-xl font-normal text-text">
                                {secondaryTitle}
                            </span>
                        </div>
                    )}
                </div>
                {/* Subtitles */}
                {subtitles.length > 0 && (
                    <div className="font-space text-base font-medium text-text-light">
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
                            className="inline-flex size-8 items-center justify-center rounded border border-black bg-primary p-1"
                        >
                            <Icon icon={icon} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
