<script setup lang="ts">
const apiFetch = useAPIFetch();
const owner = ref({
  id: "",
  name: "",
  email: "",
  mobile: "",
});
const route = useRoute();

const { data } = await apiFetch("/api/oauth/owner");
owner.value = data.value?.data?.owner ?? {
  id: "",
  name: "",
  email: "",
  mobile: "",
};
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UFormField label="Owner ID">
          <UInput
            readonly
            size="xl"
            placeholder="Owner ID"
            v-model="owner.id"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Owner Name">
          <UInput
            readonly
            size="xl"
            placeholder="Owner Name"
            v-model="owner.name"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Owner Email">
          <UInput
            readonly
            size="xl"
            placeholder="Owner Email"
            v-model="owner.email"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Owner Phone">
          <UInput
            readonly
            size="xl"
            placeholder="Owner Phone"
            v-model="owner.mobile"
            class="w-full"
          />
        </UFormField>
      </div> </UDashboardPanel
  ></UDashboardPage>
</template>
