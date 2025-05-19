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
console.log(products.value[0]);
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
      disabled: !row.url,
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
      <UDashboardNavbar title="Dashboard" />

      <DashboardTable
        :rows="products"
        :columns="columns"
        :sort="sort"
        :actions="actions"
        :pagination="products"
      />
    </UDashboardPanel>
  </UDashboardPage>
</template>
