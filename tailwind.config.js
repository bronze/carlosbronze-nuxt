import animate from "tailwindcss-animate"
const defaultTheme=require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export const darkMode: ['class', '[data-theme="dark"]', [
  '@media (prefers-color-scheme: dark) { &:not(.light *) }',
  '&:is(.dark *)',
]]
export const safelist=["dark"]
export const prefix=""
export const theme={
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    fontSize: {
      xs: ['0.75rem', {lineHeight: '1rem'}],
      sm: ['0.875rem', {lineHeight: '1.25rem'}],
      base: ['1rem', {lineHeight: '1.5rem'}],
      lg: ['1.125rem', {lineHeight: '1.75rem'}],
      xl: ['1.25rem', {lineHeight: '1.75rem'}],
      '2xl': ['1.5rem', {lineHeight: '2rem'}],
      '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
      '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
      '5xl': ['3rem', {lineHeight: '1'}],
      '6xl': ['3.75rem', {lineHeight: '1'}],
      '7xl': ['4.5rem', {lineHeight: '1'}],
      '8xl': ['6rem', {lineHeight: '1'}],
      '9xl': ['8rem', {lineHeight: '1'}],
    },
    fontFamily: {
      sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      mono: ["Fira Code VF", ...defaultTheme.fontFamily.mono],
      source: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      'nunito': ["Nunito Variable", ...defaultTheme.fontFamily.sans],
      'quincy': ["Quincy CF", ...defaultTheme.fontFamily.serif],
    },
    variants: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
    zIndex: {
      "-1": "-1",
    },
    borderRadius: {
      xl: "calc(var(--radius) + 4px)",
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: {height: 0},
        to: {height: "var(--radix-accordion-content-height)"},
      },
      "accordion-up": {
        from: {height: "var(--radix-accordion-content-height)"},
        to: {height: 0},
      },
      "collapsible-down": {
        from: {height: 0},
        to: {height: 'var(--radix-collapsible-content-height)'},
      },
      "collapsible-up": {
        from: {height: 'var(--radix-collapsible-content-height)'},
        to: {height: 0},
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "collapsible-down": "collapsible-down 0.2s ease-in-out",
      "collapsible-up": "collapsible-up 0.2s ease-in-out",
    },
  },
}
export const plugins=["animate", "tailwindcss-fluid-type"]
