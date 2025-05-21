<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";
const apiFetch = useAPIFetch();
const URL = "/api/social-links";
const { t } = useI18n();
const { data: data } = await apiFetch(`${URL}`);
const state = reactive({
  facebook_pixel: data.value?.data?.facebook_pixel,
  google_analytics: data.value?.data?.google_analytics,
  tiktok_key: data.value?.data?.tiktok_id,
  snapchat_key: data.value?.data?.snapchat_id,
  pinterest_key: data.value?.data?.pinterest_id,
  google_gtag_id: data.value?.data?.google_gtag_id,
  facebook_key: data.value?.data?.facebook_id,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.tiktok_key)
    errors.push({ name: "tiktok_key", message: t("tiktok_key_required") });
  if (!state.snapchat_key)
    errors.push({ name: "snapchat_key", message: t("snapchat_key_required") });
  if (!state.pinterest_key)
    errors.push({
      name: "pinterest_key",
      message: t("pinterest_key_required"),
    });
  if (!state.google_gtag_id)
    errors.push({
      name: "google_tag_id",
      message: t("google_analytics_required"),
    });
  if (!state.facebook_key)
    errors.push({
      name: "facebook_pixel",
      message: t("facebook_pixel_required"),
    });
  if (!state.google_analytics)
    errors.push({
      name: "google_analytics",
      message: t("google_analytics_required"),
    });
  // if (!state.facebook_pixel) errors.push({ name: "facebook_pixel", message: t("facebook_pixel_required") });
  return errors;
};

async function onSubmit() {
  const { error } = await apiFetch(`${URL}`, {
    method: "POST",
    body: {
      tiktok_id: state.tiktok_key,
      snapchat_id: state.snapchat_key,
      pinterest_id: state.pinterest_key,
      facebook_id: state.facebook_key,
      google_gtag_id: state.google_gtag_id,
      facebook_pixel: state.facebook_pixel,
      google_analytics: state.google_analytics,
    },
  });
}
</script>

<template>
  <UDashboardPanel grow>
    <UDashboardNavbar
      class="dark:text-white dark:bg-gray-500 bg-gray-100"
      :title="t('social_links')"
      :badge="0"
    >
    </UDashboardNavbar>
    <UContainer>
      <UForm
        ref="formRef"
        :state="state"
        :validate="validate"
        @submit="onSubmit"
        class="space-y-3 p-6"
      >
        <div class="mb-6 d-flex flex justify-between">
          <div>
            <h2 class="text-xl font-semibold text-gray-800">
              {{ $t("social_tracking") }}
            </h2>
            <p class="text-sm text-gray-500">
              {{ $t("social_tracking_settings_description") }}
            </p>
          </div>
          <div class="flex justify-end">
            <UButton
              type="submit"
              block
              :label="$t('save_changes')"
              color="primary"
            />
          </div>
        </div>
        <UFormField
          name="tiktok_key"
          :label="$t('tiktok_key')"
          :description="$t('tiktok_key_description')"
          class="grid grid-cols-2 gap-4 items-start border-b pb-3 border-gray-300"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.tiktok_key"
            name="tiktok_key"
            class="col-span-1 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
            :placeholder="t('enter_tiktok_key')"
            autocomplete="off"
            size="lg"
          />
        </UFormField>

        <UFormField
          name="snapchat_key"
          :label="$t('snapchat_key')"
          :description="$t('snapchat_key_description')"
          class="grid grid-cols-2 gap-4 items-start border-b pb-3 border-gray-300"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.snapchat_key"
            name="snapchat_key"
            class="col-span-1 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
            :placeholder="t('enter_snapchat_key')"
            autocomplete="off"
            size="lg"
          />
        </UFormField>

        <UFormField
          name="pinterest_key"
          :label="$t('pinterest_key')"
          :description="$t('pinterest_key_description')"
          class="grid grid-cols-2 gap-4 items-start border-b pb-3 border-gray-300"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.pinterest_key"
            name="pinterest_key"
            class="col-span-1 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
            :placeholder="t('enter_pinterest_key')"
            autocomplete="off"
            size="lg"
          />
        </UFormField>

        <UFormField
          name="google_tag_id"
          :label="$t('google_tag_id')"
          :description="$t('google_tag_id_description')"
          class="grid grid-cols-2 gap-4 items-start border-b pb-3 border-gray-300"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.google_gtag_id"
            name="google_tag_id"
            class="col-span-1 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
            :placeholder="t('enter_google_tag_id')"
            autocomplete="off"
            size="lg"
          />
        </UFormField>

        <UFormField
          name="google_analytics"
          :label="$t('google_analytics')"
          :description="$t('google_analytics_description')"
          class="grid grid-cols-2 gap-4 items-start border-b pb-3 border-gray-300"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.google_analytics"
            name="google_analytics"
            class="col-span-1 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
            :placeholder="t('enter_google_analytics')"
            autocomplete="off"
            size="lg"
          />
        </UFormField>

        <UFormField
          name="facebook_pixel"
          :label="$t('facebook_pixel')"
          :description="$t('facebook_pixel_tracking_description')"
          class="grid grid-cols-2 gap-4 items-start border-b pb-3 border-gray-300"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.facebook_key"
            name="facebook_pixel"
            class="col-span-1 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
            :placeholder="t('enter_facebook_pixel')"
            autocomplete="off"
            size="lg"
          />
        </UFormField>
      </UForm>
    </UContainer>
  </UDashboardPanel>
</template>
