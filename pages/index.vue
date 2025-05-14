<script setup lang="ts">
import type { FormError } from "#ui/types";

const route = useRoute();
const state = reactive({
  email: undefined,
  phone: undefined,
  password: "",
});

const validateEmail = () => {
  const errors: FormError[] = [];

  if (!state.email)
    errors.push({ path: "email", message: t("input_required") });
  if (!state.password)
    errors.push({ path: "password", message: t("password_required") });
  if (state.password?.length < 8)
    errors.push({ path: "password", message: t("password_min") });

  return errors;
};

const onSubmit = async (verifications = { code: null, token: null }) => {
  const { data, error } = await useAPIFetch("/store/login", {
    method: "POST",
    body: {
      register_with: withoutPhone.value ? "email" : "phone",
      ...(withoutPhone.value
        ? {
            email: state.email,
            password: state.password,
          }
        : verifications),
    },
    watch: false,
  });

  if (error.value) {
    return setFormErrors(formRef.value.formRef, error.value);
  }

  if (data.value) {
    const { token, customer } = data.value.data;

    if (token) {
      setToken(token);
    }
  }
};
</script>

<template>
  <h1>login form</h1>
  <UForm
    :state="state"
    @submit.prevent="onSubmit()"
    :validate-on="['submit']"
    :validate="validateEmail"
    ref="formRef"
  >
    <div class="grid gap-2">
      <UFormGroup name="email" :label="'email'" required>
        <UInput id="email" v-model="state.email" type="email" size="md" />
      </UFormGroup>
      <UFormGroup name="password" :label="'password'" required>
        <UInput
          id="password"
          v-model="state.password"
          type="password"
          size="md"
        />
      </UFormGroup>
    </div>
    <UButton block class="mt-6" type="submit">Login</UButton>
  </UForm>
</template>
