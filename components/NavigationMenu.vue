<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "Salla Login",
    icon: "i-simple-icons-salla",
    to: "/",
  },
  {
    label: "Refresh Token",
    icon: "i-mdi-refresh",
    to: "refresh-tokens",
  },
  {
    label: "Owner Details",
    icon: "i-mdi-user",
    to: "owner-details",
  },
  {
    label: "Products",
    icon: "i-mdi-cart-outline",
    to: "products",
  },
  {
    label: "Social Links",
    icon: "i-mdi-gear",
    to: "social-links",
  },
];

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <UDashboardSidebar
    collapsible
    resizable
    :ui="{ footer: 'border-t border-default' }"
    toggle-side="right"
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full',
    }"
  >
    <template #header>
      <img src="/favicon.ico" class="h-5 w-auto" />
    </template>

    <UNavigationMenu :items="items" orientation="vertical" />
    <template #footer="{ collapsed }">
      <ClientOnly v-if="!colorMode?.forced">
        <UButton
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="ghost"
          @click="isDark = !isDark"
        />

        <template #fallback>
          <div class="size-8" />
        </template>
      </ClientOnly>
    </template>
  </UDashboardSidebar>
</template>
