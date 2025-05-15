<template>
  <div vaul-drawer-wrapper class="min-h-screen bg-gray-100 text-gray-800 flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md p-6">
      <h1 class="text-2xl font-bold mb-4">Salla Auth</h1>
      <nav class="space-y-2">
        <NuxtLink to="/" class="block text-gray-700 hover:text-blue-600"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/refresh-token"
          class="block text-gray-700 hover:text-blue-600"
          >Reset Token</NuxtLink
        >
        <NuxtLink to="/details" class="block text-gray-700 hover:text-blue-600"
          >User Details</NuxtLink
        >
      </nav>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <!-- Optional Header -->
      <header class="bg-white shadow p-4 flex items-center justify-between">
        <h2 class="text-lg font-semibold">Dashboard</h2>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleLoginClick = () => {
  console.log("Login clicked");
};
</script>
