<template>
  <div vaul-drawer-wrapper class="bg-white">
    <NuxtLayout>
      <UNavigationMenu
        orientation="horizontal"
        :items="items"
        class="data-[orientation=vertical]:w-48"
      />

      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Login",
      to: "/",
      icon: "i-mdi-user",
    },
    {
      label: "Redirect",
      icon: "i-mdi-book-open",
      to: "/redirect",
    },
  ],
]);
</script>
