import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
    "./nuxt.config.ts",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "376px",
      },
      fontFamily: {
        roboto: ["'Poppins'"],
        body: ["'DM Sans'"],
        // body: ["'Gotham Rounded'"],
        // body: ["'Raleway'"],
        gotham: ["'Gotham Rounded'"],
        miller: ["'Miller Display'"],
        arabic: ["'PingAR LT'"],
      },
      colors: {
        "jazzberry-jam": {
          "50": "#fcf3f9",
          "100": "#fbe8f6",
          "200": "#f9d1ed",
          "300": "#f5acde",
          "400": "#ee78c6",
          "500": "#e450ad",
          "600": "#d2308e",
          "700": "#b62073",
          "800": "#9d1f63",
          "900": "#7e1d51",
          "950": "#4c0b2e",
        },
        frenshRose: {
          "50": "#fdf2f7",
          "100": "#fce7f1",
          "200": "#fbcfe5",
          "300": "#faa7ce",
          "400": "#f571ac",
          "500": "#ef5897",
          "600": "#dc2669",
          "700": "#bf1750",
          "800": "#9e1643",
          "900": "#84173b",
          "950": "#51061e",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "sc-primary": {
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
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
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
  plugins: [],
};

export default config;
