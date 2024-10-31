const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                space: ['Space Mono'],
            },
            boxShadow: {
                button: '2px 2px 0px 0px rgba(0, 0, 0, 0.25)',
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
                    light: colors.neutral[600],
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};

export default config;
