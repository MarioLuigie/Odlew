import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // Użyj importu zamiast require

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#DEDCD8',
                menuTextLight: '#EEE9E2',
                menuTextDark: '#383638',
                menuTopBg: '#463E46',
                menuBottomBg: '#DAD7D1',
                header: '#000000',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [tailwindcssAnimate], 
};

export default config;
