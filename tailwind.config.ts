import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // Użyj importu zamiast require

// dimensions
export const headerHeight = '100px'
export const sectionHeight = '820px'

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
                backgroundDark: '#BCB8B5',
                mottoBg: '#22403E',
                mottoBg_grey: '#BCB8B5',
                headerBg: '#080808',
                footerBg: '#22403E',
                menuTopBg: '#463E46',
                menuBottomBg: '#DAD7D1',
                opinionBg: '#ebebeb',
                inputBg: '#ebebeb',
                accent: '#B75601',
                accentHover: '#F38A3F',
                accentActive: '#D06101',
                accentVisited: '#D06101',
                accentMovie: '#E36A00',
                textLight: '#EEE9E2',
                textDark: '#383638',
                textSecondary: '#757575',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            height: {
                header: headerHeight,
                // customScreen: `calc(100vh - ${headerHeight})`,
                customScreen: '100vh',

            },
            minHeight: {
                customScreen: `calc(100vh - ${headerHeight})`,
                header: headerHeight,
                sectionHeight: sectionHeight
            },
            maxHeight: {
                customScreen: `calc(100vh - ${headerHeight})`,
            },
            margin: {
                header: headerHeight,
            },
            scrollMargin: {
                header: headerHeight,
            },
            screens: {
                'dp': '768px',
            }
        },
    },
    plugins: [tailwindcssAnimate], 
};

export default config;
