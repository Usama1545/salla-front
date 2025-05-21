<script setup lang="ts">
import type { FormError } from "#ui/types";
const apiFetch = useAPIFetch();

const route = useRoute();
const handleLoginClick = async () => {
  const { data } = await apiFetch("/api/oauth/redirect");

  window.location.href = data.value.url;
};
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar
        class="dark:text-white dark:bg-gray-500 bg-gray-100"
        title="Salla Auth"
        :badge="0"
      >
      </UDashboardNavbar>
      <div
        class="flex flex-col items-center justify-center align-center text-center mt-50"
      >
        <h1 class="text-3xl font-bold mb-2">Salla auth Platform</h1>
        <p class="text-gray-600 mb-6">Login to your salla account</p>

        <UButton color="primary" size="lg" @click="handleLoginClick">
          Login
        </UButton>
      </div>
    </UDashboardPanel>
  </UDashboardPage>
</template>
