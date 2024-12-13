import type { Config } from "tailwindcss";
import tailwindAnimate from 'tailwindcss-animate';
import tailwindEasings from "tailwindcss-easing";

const thememize = (colors: Record<string, unknown>) => {
	return Object.keys(colors).reduce((acc: typeof colors, key) => {
		acc[`theme-${key}`] = colors[key];
		return acc;
	}, {});
}

const customThemeColors = { 
	"theme-blue": "#6CCFF6",
	"theme-orange": "#FA9500",
	"theme-green": "#13505B",
	"theme-red": "#E84855",
	"theme-gray": "#D7D9CE",
	"theme-olive": "#98A886",
	"theme-bg": "#ebebeb"
}

const coolorsThemeColors = { 'pale_azure': { DEFAULT: '#6ccff6', 100: '#043142', 200: '#086184', 300: '#0d92c6', 400: '#28b8f1', 500: '#6ccff6', 600: '#88d8f7', 700: '#a6e2f9', 800: '#c4ebfb', 900: '#e1f5fd' }, 'princeton_orange': { DEFAULT: '#fa9500', 100: '#321e00', 200: '#643c00', 300: '#965a00', 400: '#c87800', 500: '#fa9500', 600: '#ffac2f', 700: '#ffc163', 800: '#ffd597', 900: '#ffeacb' }, 'midnight_green': { DEFAULT: '#13505b', 100: '#041013', 200: '#082125', 300: '#0c3138', 400: '#10414a', 500: '#13505b', 600: '#228c9e', 700: '#3abed5', 800: '#7cd4e3', 900: '#bde9f1' }, 'red_(crayola)': { DEFAULT: '#e84855', 100: '#36070b', 200: '#6d0d15', 300: '#a31420', 400: '#da1b2b', 500: '#e84855', 600: '#ed6e78', 700: '#f2929a', 800: '#f6b6bc', 900: '#fbdbdd' }, 'cambridge_blue': { DEFAULT: '#98a886', 100: '#1e2319', 200: '#3d4633', 300: '#5b694c', 400: '#7a8c65', 500: '#98a886', 600: '#acb99e', 700: '#c1cab6', 800: '#d6dcce', 900: '#eaede7' } };

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			...customThemeColors,
			...thememize(coolorsThemeColors)
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindAnimate, tailwindEasings],
} satisfies Config;
