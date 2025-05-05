import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "hooks/useAuth";
import { useKy } from "hooks/useKy";
import ky from "ky";
import { CheckLoginResponse, loginResponse, user } from "types/FetchInterfaces";
import { LOGIN, USERS } from "./ApiVars";

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

export const useAuthQuery = () => {
  const { auth } = useAuth();
  const { customKy } = useKy();

  const getUser = async (login: string) => {
    const users: user[] = await customKy.get(USERS).json();
    const user = users.find((user) => user.username === login);

    return user;
  };
  const useGetUser = () => {
    return useQuery({
      queryKey: ["user", auth?.username],
      queryFn: async () => {
        if (!auth?.username) return;
        const user = await getUser(auth.username);
        return user;
      },
    });
  };

  const CheckLogin = () =>
    useMutation({
      mutationKey: ["CheckLogin"],
      mutationFn: async (
        login: string
      ): Promise<CheckLoginResponse | undefined> => getUser(login),
      gcTime: 0,
    });

  const LoginByPassword = () => {
    return useMutation({
      mutationFn: async (credentials: {
        login: string;
        password: string;
      }): Promise<loginResponse> => {
        const user = await getUser(credentials.login);
        return await customKy
          .post(LOGIN, {
            json: { email: user?.email, password: credentials.password },
          })
          .json();
      },
      gcTime: 0,
    });
  };

  const LoginByCode = () => {
    return useMutation({
      mutationFn: async (credentials: { login: string; code: string }) => {
        const user = await getUser(credentials.login);
        console.log(Number(user?.otp) === Number(credentials.code));

        if (Number(user?.otp) === Number(credentials.code)) {
          const userData = await customKy
            .post<loginResponse>(LOGIN, {
              json: { email: user?.email, password: user?.realPassword },
            })
            .json();
          return userData;
        } else {
          throw new Error("wrong code");
        }
      },
      gcTime: 0,
    });
  };

  const RequestCode = () => {
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

  return {
    CheckLogin,
    RequestCode,
    LoginByCode,
    LoginByPassword,
    useGetUser,
  };
};
