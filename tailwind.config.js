/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            lexend: ["Lexend", "sans-serif"],
            lora: ["Lora", "serif"],
        },
        extend: {
            animation: {
                fadeIn: "fadeIn 0.3s",
            },
            keyframes: {
                fadeIn: {
                    "0%": { height: "0", opacity: "0" },
                    "100%": { height: "15.7rem", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
