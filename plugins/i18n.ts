import { createI18n } from "vue-i18n";
import { en } from "../lang/en";
import { ar } from "../lang/ar";
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en: en,
      ar: ar,
    },
  });

  vueApp.use(i18n);
});
