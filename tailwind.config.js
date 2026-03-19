const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    safelist: [
        'bg-pink-200',
        'bg-orange-200',
        'bg-amber-200',
        'bg-emerald-200',
        'bg-sky-200',
        'bg-violet-200',
        'bg-cyan-200',
        'group-hover:bg-cyan-200',
        'group-hover:bg-pink-200',
        'group-hover:bg-orange-200',
        'group-hover:bg-amber-200',
        'group-hover:bg-emerald-200',
        'group-hover:bg-sky-200',
        'group-hover:bg-violet-200',
        'md:hover:bg-pink-200',
        'md:hover:bg-sky-200',
        'md:hover:bg-violet-200',
    ],
    theme: {
        extend: {
            fontFamily: {
                space: ['Space Mono', 'monospace'],
            },
            boxShadow: {
                button: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
                'button-hover': '1px 1px 0px 0px rgba(0, 0, 0, 1)',
                'button-lg': '3px 3px 0px 0px rgba(0, 0, 0, 1)',
                card: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
                'card-hover': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
                badge: '1px 1px 0px 0px rgba(0, 0, 0, 1)',
            },
            colors: {
                background: {
                    DEFAULT: colors.stone[50],
                    card: colors.orange[50],
                },
                primary: {
                    DEFAULT: colors.pink[50],
                    hover: colors.pink[200],
                },
                text: {
                    DEFAULT: colors.neutral[900],
                    light: colors.neutral[500],
                    muted: colors.neutral[400],
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};

export default config;
