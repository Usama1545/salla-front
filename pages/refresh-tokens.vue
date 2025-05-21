<script setup lang="ts">
import type { FormError } from "#ui/types";
const { setToken } = useStore();
const apiFetch = useAPIFetch();
const route = useRoute();
const handleRefreshClick = async () => {
  const { data } = await apiFetch("/api/oauth/refresh-token", {
    once: true,
    watch: false,
  });
  const accessToken = data.value?.data?.access_token;
  if (accessToken && accessToken.length > 0) {
    setToken(accessToken);
  }
};
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar
        class="dark:text-white dark:bg-gray-500 bg-gray-100"
        title="Salla Refresh Token"
        :badge="0"
      >
      </UDashboardNavbar>
      <div
        class="flex flex-col items-center justify-center align-center text-center mt-50"
      >
        <h1 class="text-3xl font-bold mb-2">Refresh Salla Auth Token</h1>
        <p class="text-gray-600 mb-6">Refresh token</p>

        <UButton color="primary" size="lg" @click="handleRefreshClick">
          Refresh
        </UButton>
      </div>
    </UDashboardPanel>
  </UDashboardPage>
</template>
