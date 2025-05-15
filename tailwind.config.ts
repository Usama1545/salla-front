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
    extend: {
      colors: {
        primary: "green",
      },
    },
  },
  plugins: [],
};

export default config;
