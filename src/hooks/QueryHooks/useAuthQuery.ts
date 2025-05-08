import { useMutation, useQuery } from "@tanstack/react-query";
import ky from "ky";
import { CheckLoginResponse, loginResponse, user } from "types/FetchInterfaces";
import { LOGIN, USERS } from "./ApiVars";
import { useQueryUtils } from "./useQueryUtils";

export const refreshToken = async (username: string) => {
  const users: user[] = await ky.get(USERS).json();
  const foundUser = users.find((u) => u.username === username);

  const { accessToken, user } = await ky
    .post<{ user: user; accessToken: string }>(LOGIN, {
      json: { email: foundUser?.email, password: foundUser?.realPassword },
    })
    .json();
  return { accessToken, ...user };
};

export const useGetUserQuery = () => {
  const { auth, getUser } = useQueryUtils();
  return useQuery({
    queryKey: ["user", auth?.username],
    queryFn: async () => {
      if (!auth?.username) return;
      const user = await getUser(auth.username);
      return user;
    },
  });
};

export const useCheckLoginQuery = () => {
  const { getUser, t } = useQueryUtils();

  return useMutation({
    mutationKey: ["CheckLogin"],
    mutationFn: async (
      login: string
    ): Promise<CheckLoginResponse | undefined> => {
      const user = await getUser(login);

      if (!user) throw new Error(t("error.userNotFound"));
      return user;
    },
    gcTime: 0,
  });
};

export const useLoginByPasswordMutation = () => {
  const { customKy, getUser, t } = useQueryUtils();
  return useMutation({
    mutationFn: async (credentials: {
      login: string;
      password: string;
    }): Promise<loginResponse> => {
      if (!credentials.password) throw new Error(t("error.noPassword"));
      const user = await getUser(credentials.login);

      if (!user) throw new Error(t("error.userNotFound!"));

      return await customKy
        .post(LOGIN, {
          json: { email: user?.email, password: credentials.password },
        })
        .json();
    },
    gcTime: 0,
  });
};

export const useLoginByCodeMutation = () => {
  const { customKy, getUser, t } = useQueryUtils();
  return useMutation({
    mutationFn: async (credentials: { login: string; code: string }) => {
      const user = await getUser(credentials.login);

      if (Number(user?.otp) === Number(credentials.code)) {
        const userData = await customKy
          .post<loginResponse>(LOGIN, {
            json: { email: user?.email, password: user?.realPassword },
          })
          .json();
        return userData;
      } else {
        throw new Error(t("error.noPassword"));
      }
    },
    gcTime: 0,
  });
};

export const useRequestCodeMutation = () => {
  const { customKy, getUser } = useQueryUtils();
  return useMutation({
    mutationFn: async (codeData: { otp: number; login: string }) => {
      const user = await getUser(codeData.login);
      return customKy.patch(`${USERS}/${user?.id}`, {
        json: { otp: codeData.otp },
      });
    },
    gcTime: 0,
  });
};
