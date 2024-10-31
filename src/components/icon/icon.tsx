import type { HTMLAttributes } from 'react';
import { createElement } from 'react';

import { icons } from './icons';

export type IconName = keyof typeof icons;

interface Props extends HTMLAttributes<HTMLDivElement> {
    icon: IconName;
    className?: string;
    rotate?: number;
}

export const Icon = ({ icon, className, rotate, ...rest }: Props) => {
    return (
        <div
            className={`inline-flex h-full w-full items-center justify-center ${className}`}
            aria-label={icon}
            role="img"
            style={{
                transform: rotate ? `rotate(${rotate}deg)` : undefined,
            }}
            {...rest}
        >
            {createElement(icons[icon])}
        </div>
    );
};
