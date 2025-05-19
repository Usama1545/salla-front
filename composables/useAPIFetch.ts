export default function useApiFetch<T>() {
  const { $i18n } = useNuxtApp();
  const t = $i18n?.t || ((key: string) => key);
  const config = useRuntimeConfig();

  const toastTitles = {
    success: t("success"),
    error: t("error"),
  };

  // Helper to get the latest token (no closure issues)
  const getLatestToken = () => useCookie("token").value;

  return (
    path: string,
    options: any = {},
    externalToken: string | null = null
  ) => {
    let locale = ref();
    let t = null;

    if (useNuxtApp().$i18n) {
      const { $i18n } = useNuxtApp();
      locale.value = $i18n.locale.value;
      t = $i18n.t;
    }

    const headers = {
      get Authorization() {
        return `Bearer ${externalToken || getLatestToken()}`;
      },
      Language: locale.value,
      "X-Requested-With": "XMLHttpRequest",
      ...useRequestHeaders(["cookie", "x-forwarded-for"]),
      ...(options.headers || {}),
    };

    return useFetch<T>(path, {
      ...options,
      baseURL: config.public.base_api_url,
      headers,
      async onResponse({ response }: any) {
        const { message: description } = response._data;
        if (description) {
          const title = [401, 403, 422, 429, 500, 404].includes(response.status)
            ? toastTitles.error
            : toastTitles.success;
        }
      },
    });
  };
}
