const httpErrorCodes = {
  unauthorized: 403,
  // unauthenticated: 401,
  validation_error: 422,
  too_many_attempts: 429,
  server_error: 500,
  not_found: 404,
};

export default function <T>(
  path: string,
  options: any = {},
  externalToken: string | null = null
) {
  let locale = ref(),
    t = null;

  if (useNuxtApp().$i18n) {
    const { $i18n } = useNuxtApp();
    locale.value = $i18n.locale.value;
    t = $i18n.t;
  }

  const route = useRoute();

  const toastTitles = {
    success: t ? t("success") : null,
    error: t ? t("error") : null,
  };

  const config = useRuntimeConfig();
  const token = useCookie<string | null>("token");
  const inLoginView = computed(() => route.path.includes("login"));

  let headers: Record<string, any> = {
    Authorization: `Bearer ${token.value}`,
    Language: locale.value,
    "X-Requested-With": "XMLHttpRequest",
    ...useRequestHeaders(["cookie", "x-forwarded-for"]),
  };

  options = {
    ...options,
    baseURL: config.public.base_api_url,
    headers,
    async onResponse({ response }: any) {
      if (response.status == 401) return;

      const { message: description } = response._data;

      if (description) {
        const title = Object.values(httpErrorCodes).includes(response.status)
          ? toastTitles.error
          : toastTitles.success;
      }
    },
  };

  return useFetch<T>(path, options);
}
