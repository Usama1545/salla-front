<template>
  <div
    vaul-drawer-wrapper
    class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 flex"
  >
    <NavigationMenu />
    <div class="flex-1 flex flex-col">
      <!-- Optional Header -->
      <header
        class="bg-white dark:bg-gray-800 dark:text-white shadow p-4 flex items-center justify-between"
      >
        <h2 class="text-lg font-semibold">Dashboard</h2>
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
      </header>

      <!-- Page Content -->
      <main
        class="flex-1 p-6 bg-gray-50 dark:bg-gray-700 dark:text-white overflow-y-auto"
      >
        <NuxtLayout>
          <NuxtPage class="w-full dark:text-white dark:bg-gray-600" />
        </NuxtLayout>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
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
