const animate=require("tailwindcss-animate");
const defaultTheme=require("tailwindcss/defaultTheme");

const {default: flattenColorPalette}=require('tailwindcss/lib/util/flattenColorPalette')

module.exports={
  darkMode: ['class', '[data-theme="dark"]', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]],
  safelist: ["dark"],
  prefix: "",
  theme: {
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
        nunito: ["Nunito Variable", ...defaultTheme.fontFamily.sans],
        quincy: ["Quincy CF", ...defaultTheme.fontFamily.serif],
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
  },
  plugins: [
    animate,
    require('tailwindcss-fluid-type')({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: 'f', // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        'xs': [-2, 1.5],
        'sm': [-1, 1.5],
        'base': [0, 1.5],
        'lg': [1, 1.5],
        'xl': [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.2],
        '4xl': [5, 1.1],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [7.7, 1],
        '8xl': [9, 1],
        '9xl': [10, 1],
        '12xl': [12, 1],
      },
    }),
    function ({matchUtilities, theme}) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        {values: flattenColorPalette(theme('backgroundColor')), type: 'color'}
      )

      matchUtilities(
        {
          highlight: (value) => ({boxShadow: `inset 0 1px 0 0 ${value}`}),
        },
        {values: flattenColorPalette(theme('backgroundColor')), type: 'color'}
      )
    },
  ],
  variants: {
    fluidType: ['responsive']
  }
};
