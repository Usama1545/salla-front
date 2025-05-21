import type { ToastProps } from "@nuxt/ui";

export default function useApiFetch<T>() {
  const { $i18n } = useNuxtApp();
  const { t } = useI18n();
  const config = useRuntimeConfig();
  const toast = useToast();

  const httpErrorCodes = {
    unauthorized: 403,
    unauthenticated: 401,
    validation_error: 422,
    too_many_attempts: 429,
    server_error: 500,
    not_found: 404,
  };

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
        if (response.status == 401) return;

        const { message: description } = response._data;
        if (description) {
          const isError = Object.values(httpErrorCodes).includes(
            response.status
          );
          toast.add({
            title: isError ? "error" : "success",
            description: description,
            color: isError ? "error" : "primary",
          } satisfies ToastProps);
        }
      },
    });
  };
}
