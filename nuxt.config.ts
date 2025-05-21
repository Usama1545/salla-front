// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtI18nOptions } from "@nuxtjs/i18n";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxt/ui-pro", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  uiPro: {
    license: "DF10D033-DE45-4A9C-B99B-1A31FC77B63C", // 👈 REQUIRED
  },
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
    vueI18n: "./i18n.config.ts",
    strategy: "prefix_and_default",
    defaultLocale: "en",
    locales: [
      {
        name: "English",
        code: "en",
        language: "en-US",
        dir: "ltr",
      },
      {
        name: "العربية",
        code: "ar",
        language: "ar-SA",
        dir: "rtl",
      },
    ],
    detectBrowserLanguage: false,
  },
  ui: {
    icons: ["heroicons"],
    themes: {
      default: "light",
    },
  },
  runtimeConfig: {
    public: {
      base_api_url: process.env.NUXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000",
      base_url: process.env.NUXT_PUBLIC_BASE_URL ?? "https://IMakeup.com/",
      app_env: process.env.NUXT_PUBLIC_APP_ENV ?? "production",
    },
  },
});
