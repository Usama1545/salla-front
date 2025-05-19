<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Salla Auth",
      type: "label",
      to: "/",
    },
  ],
  [
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
    // {
    //   label: "Products",
    //   icon: "i-lucide-book-open",
    //   children: [
    //     {
    //       label: "",
    //       description: "Fully styled and customizable components for Nuxt.",
    //       icon: "i-lucide-house",
    //     },
    //   ],
    // },
  ],
]);
</script>

<template>
  <UNavigationMenu
    :ui="{
      label:
        'w-full flex items-center gap-1.5 font-semibold text-xl text-xs/5 text-highlighted px-3.5 py-3.5',
    }"
    orientation="vertical"
    :items="items"
    class="data-[orientation=vertical]:w-48 px-4"
  />
</template>
