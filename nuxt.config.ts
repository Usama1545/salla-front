// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  ui: {
    icons: ["heroicons", "mdi"],
  },
  runtimeConfig: {
    public: {
      base_api_url: process.env.NUXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000",
      base_url: process.env.NUXT_PUBLIC_BASE_URL ?? "https://IMakeup.com/",
      app_env: process.env.NUXT_PUBLIC_APP_ENV ?? "production",
    },
  },
});
