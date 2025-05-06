import useAuth from "hooks/useAuth";
import ky from "ky";
import { refreshToken } from "./QueryHooks/useAuthQuery";

export const useKy = () => {
  const { auth, setAuth } = useAuth();

  const customKy = ky.extend({
    hooks: {
      beforeRequest: [
        async (request) => {
          if (auth)
            request.headers.set("Authorization", `Bearer ${auth.accessToken}`);
        },
      ],
      afterResponse: [
        async (request, _, response) => {
          if (response.status === 401) {
            try {
              if (!auth?.username) return;
              const { accessToken, username } = await refreshToken(
                auth?.username
              );
              setAuth({ accessToken, username });
              request.headers.set("Authorization", `Bearer ${accessToken}`);

              return ky(request);
            } catch (error) {
              throw new Error("Failed to refresh token: " + error);
            }
          }
        },
      ],
    },
    retry: {
      methods: ["get", "post"],
      limit: 3,
      statusCodes: [401],
    },
  });

  return { customKy };
};
