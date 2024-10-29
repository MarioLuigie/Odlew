import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // Użyj importu zamiast require

// dimensions
export const headerHeight = '100px'

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
                header: '#080808',
                footer: '#22403E',
                accent: '#E36A00',
                accentHover: '#D06101',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            height: {
                header: headerHeight,
                customScreen: `calc(100vh - ${headerHeight})`,
            },
            minHeight: {
                customScreen: `calc(100vh - ${headerHeight})`,
            }
        },
    },
    plugins: [tailwindcssAnimate], 
};

export default config;
