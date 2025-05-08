import useAuth from "hooks/useAuth";
import { useKy } from "hooks/useKy";
import { useCallback } from "react";
import { user } from "types/FetchInterfaces";
import { USERS } from "./ApiVars";

export const useQueryUtils = () => {
  const { auth } = useAuth();
  const { customKy } = useKy();

  const getUser = useCallback(
    async (login: string) => {
      const users: user[] = await customKy.get(USERS).json();
      const user = users.find((user) => user.username === login);
      return user;
    },
    [customKy]
  );

  return { auth, customKy, getUser };
};
