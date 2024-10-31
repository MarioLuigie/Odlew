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
                mottoBg: '#BCB8B5',
                headerBg: '#080808',
                footerBg: '#22403E',
                menuTopBg: '#463E46',
                menuBottomBg: '#DAD7D1',
                accent: '#E36A00',
                accentHover: '#D06101',
                textLight: '#EEE9E2',
                textDark: '#383638',
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
                header: headerHeight,
            },
            margin: {
                header: headerHeight,
            },
            scrollMargin: {
                header: headerHeight,
            }
        },
    },
    plugins: [tailwindcssAnimate], 
};

export default config;
