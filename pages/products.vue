<script lang="ts" setup>
import DashboardTable from "~/components/DashboardTable.vue";

const route = useRoute();
const router = useRouter();
const apiFetch = useAPIFetch();
const products = ref([]);
const sort = ref({ column: "id", direction: "asc" as const });
const URL = "/api/products";

const { data, pending, refresh } = await apiFetch(URL, {});
products.value = data.value?.data?.data ?? [];
const columns = [
  {
    accessorKey: "actions",
    header: "Actions",
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "sku",
    header: "Sku",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
];

const actions = (row) => [
  [
    {
      label: "visit",
      icon: "humbleicons:external-link",
      //   click: () => {
      //     window.open(row.url, "_blank");
      //   },
    },
  ],
];
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar
        class="dark:text-white dark:bg-gray-500 bg-gray-100"
        title="Products"
        :badge="0"
      >
        <template #right>
          <UButton :label="'Create Product'" icon="i-heroicons-plus" />
        </template>
      </UDashboardNavbar>
      <div class="p-4">
        <DashboardTable
          :rows="products"
          :columns="columns"
          :sort="sort"
          :actions="actions"
          :pagination="products"
        />
      </div>
    </UDashboardPanel>
  </UDashboardPage>
</template>
