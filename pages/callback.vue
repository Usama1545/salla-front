<script setup lang="ts">
import { watchEffect } from "vue";

const { setToken } = useStore();
const route = useRoute();

const triggerCallback = async () => {
  const queryParams = route.query;

  if (!queryParams || Object.keys(queryParams).length === 0) {
    console.log("No query params found yet");
    return;
  }

  const { data } = await useAPIFetch("/api/oauth/callback", {
    method: "GET",
    params: queryParams,
  });

  const accessToken = data.value?.data?.user?.token?.access_token;

  if (accessToken) {
    setToken(accessToken);
  } else {
    console.log("Access token not found in response");
  }
};

watchEffect(() => {
  if (Object.keys(route.query).length > 0) {
    triggerCallback();
  }
});
</script>

<template>
  <div class="absolute w-full h-1 bg-primary">
    <div
      class="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4"
    >
      <h1 class="text-3xl font-bold mb-2">Salla Auth Processing</h1>
      <p class="text-gray-600 mb-6">Callback received</p>
    </div>
  </div>
</template>
