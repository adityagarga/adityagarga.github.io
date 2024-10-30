/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                space: ['"Space Mono"'],
            },
            boxShadow: {
                "button": "4px 4px 0px 0px rgba(0, 0, 0, 0.25)",
            },
        },
    },
    plugins: [],
};

export default config;
