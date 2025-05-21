<template>
  <UTable
    v-model:sort="sort"
    v-model="selected"
    :data="rows"
    :columns="columns"
    sort-mode="manual"
    class="w-full h-full"
    :ui="{ divide: 'divide-gray-200 dark:divide-gray-800' }"
  >
    <template #actions-cell="{ row }">
      <UDropdownMenu
        :popper="{
          strategy: 'absolute',
          placement: 'bottom-start',
        }"
        :items="actions(row)"
      >
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-ellipsis-vertical-20-solid"
        />
      </UDropdownMenu>
    </template>

    <template
      v-for="column in columns.filter((c) => c.override)"
      :key="column.key"
      #[`${column.key}-data`]="{ row }"
    >
      <slot :name="`${column.key}-data`" :row="row" />
    </template>
  </UTable>

  <div class="flex flex-wrap items-center justify-center border-t">
    <PartialsPagination
      :paginate="paginate"
      :page="page"
      @update:page="(_val) => emit('update:page', _val)"
    />
  </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
const props = defineProps<{
  columns: Array<{ key: string; label: string; sortable?: boolean }>;
  actions?: Function;
  rows: Array<any>;
  paginate: any;
  page: number;
  modelValue: any[];
}>();

const emit = defineEmits(["update:page", "update:modelValue"]);

const sort = defineModel("sort", {
  required: false,
  default: { openedRows: [], row: null },
});

const selected = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
