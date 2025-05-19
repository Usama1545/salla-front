export default function () {
  const token = useCookie<string | undefined>("token", {
    maxAge: 60 * 60 * 24 * 30 * 365,
  });

  const setToken = async (newToken: string) => {
    token.value = newToken;
  };

  return {
    token,
    setToken,
  };
}
