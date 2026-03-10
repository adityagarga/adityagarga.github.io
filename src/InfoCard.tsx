import { Icon, IconName } from './components/icon';
import { Button } from './components/ui/button';

export type CardColor = 'pink' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';

const colorStyles: Record<CardColor, { card: string; bullet: string; badge: string }> = {
    pink: {
        card: 'bg-pink-50',
        bullet: 'bg-pink-400',
        badge: 'bg-pink-100',
    },
    orange: {
        card: 'bg-orange-50',
        bullet: 'bg-orange-400',
        badge: 'bg-orange-100',
    },
    yellow: {
        card: 'bg-amber-50',
        bullet: 'bg-amber-400',
        badge: 'bg-amber-100',
    },
    green: {
        card: 'bg-emerald-50',
        bullet: 'bg-emerald-400',
        badge: 'bg-emerald-100',
    },
    blue: {
        card: 'bg-sky-50',
        bullet: 'bg-sky-400',
        badge: 'bg-sky-100',
    },
    purple: {
        card: 'bg-violet-50',
        bullet: 'bg-violet-400',
        badge: 'bg-violet-100',
    },
};

type InfoCardProps = {
    primaryIcon?: IconName;
    primaryEmoji?: string;
    primaryTitle: string;
    secondaryTitle?: string;
    subtitles?: string[];
    description?: string[];
    icons?: IconName[];
    link?: string;
    color?: CardColor;
};

export const InfoCard = ({
    primaryIcon,
    primaryEmoji,
    primaryTitle,
    secondaryTitle,
    subtitles = [],
    description = [],
    icons = [],
    link,
    color = 'orange',
}: InfoCardProps) => {
    const CardWrapper = link ? 'a' : 'div';
    const wrapperProps = link
        ? { href: link, target: '_blank', rel: 'noopener noreferrer' as const }
        : {};
    const styles = colorStyles[color];

    return (
        <CardWrapper
            {...(wrapperProps as any)}
            className={`group flex w-full flex-col gap-3 rounded border-2 border-black ${styles.card} px-5 py-4 shadow-card transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-card-hover sm:px-8`}
        >
            <div className="flex flex-col flex-wrap">
                <div className="flex flex-wrap items-center gap-2">
                    {(primaryIcon || primaryEmoji) && (
                        <Button
                            size="medium"
                            className="pointer-events-none min-h-10 min-w-10 shrink-0"
                        >
                            {primaryEmoji ? (
                                <span className="text-xl">{primaryEmoji}</span>
                            ) : (
                                <Icon icon={primaryIcon!} />
                            )}
                        </Button>
                    )}
                    <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-space text-lg font-bold text-text sm:text-xl">
                            {primaryTitle}
                        </span>
                        {secondaryTitle && (
                            <span className="font-space text-base text-text-light sm:text-lg">
                                {secondaryTitle}
                            </span>
                        )}
                    </div>
                </div>
                {subtitles.length > 0 && (
                    <div className="mt-1 font-space text-sm text-text-muted sm:text-base">
                        {subtitles.map((subtitle, index) => (
                            <div key={index}>{subtitle}</div>
                        ))}
                    </div>
                )}
            </div>

            {description.length > 0 && (
                <div>
                    {description.length === 1 ? (
                        <p className="font-space text-sm leading-relaxed text-text sm:text-base">
                            {description[0]}
                        </p>
                    ) : (
                        <ul className="space-y-1 font-space text-sm leading-relaxed text-text sm:text-base">
                            {description.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span
                                        className={`mr-2 mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${styles.bullet}`}
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {icons.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                    {icons.map((icon, index) => (
                        <div
                            key={index}
                            className={`inline-flex size-8 items-center justify-center rounded border-2 border-black ${styles.badge} p-1 shadow-badge`}
                            title={icon}
                        >
                            <Icon icon={icon} />
                        </div>
                    ))}
                </div>
            )}
        </CardWrapper>
    );
};
