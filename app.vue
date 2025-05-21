<template>
  <UApp :locale="locales[locale]">
    <UDashboardGroup>
      <NavigationMenu />
      <NuxtPage class="w-full overflow-y-auto" />
    </UDashboardGroup>
  </UApp>
</template>

<script setup lang="ts">
import * as locales from "@nuxt/ui-pro/locale";

const colorMode = useColorMode();
const { locale } = useI18n();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>
