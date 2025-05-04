import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser } from "helpers";
import useAuth from "hooks/useAuth";
import ky from "ky";
import { CheckLoginResponse, loginResponse } from "types/FetchInterfaces";
import { LOGIN, USERS } from "./ApiVars";

export const CheckLogin = () =>
  useMutation({
    mutationKey: ["CheckLogin"],
    mutationFn: async (
      login: string
    ): Promise<CheckLoginResponse | undefined> => getUser(login),
    gcTime: 0,
  });

export const LoginByPassword = () => {
  return useMutation({
    mutationFn: async (credentials: {
      login: string;
      password: string;
    }): Promise<loginResponse> => {
      const user = await getUser(credentials.login);
      return await ky
        .post(LOGIN, {
          json: { email: user?.email, password: credentials.password },
        })
        .json();
    },
    gcTime: 0,
  });
};

export const LoginByCode = () => {
  return useMutation({
    mutationFn: async (credentials: { login: string; code: string }) => {
      const user = await getUser(credentials.login);
      console.log(user?.otp == credentials.code);

      if (user?.otp == credentials.code) {
        const userData = await ky
          .post<loginResponse>(LOGIN, {
            json: { email: user?.email, password: user?.realPassword },
          })
          .json();
        return userData;
      }
    },
    gcTime: 0,
  });
};

export const RequestCode = () => {
  return useMutation({
    mutationFn: async (codeData: { otp: number; login: string }) => {
      const user = await getUser(codeData.login);
      return ky.patch(`${USERS}/${user?.id}`, { json: { otp: codeData.otp } });
    },
    gcTime: 0,
  });
};

export const RefreshToken = async (login: string) => {
  const user = await getUser(login);

  return await ky
    .post<{ username: string; accessToken: string }>(LOGIN, {
      json: { email: user?.email, password: user?.realPassword },
    })
    .json();
};

export const useGetUser = () => {
  const { auth } = useAuth();

  return useQuery({
    queryKey: ["user", auth?.username],
    queryFn: async () => {
      if (!auth?.username) return;
      const user = await getUser(auth.username);
      return user;
    },
  });
};
