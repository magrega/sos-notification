import { useQuery } from "@tanstack/react-query";
import { useKy } from "hooks/useKy";
import { ChangelogResponse } from "types/FetchInterfaces";
import { BASE_API } from "./ApiVars";

export const useGetChangeLogs = (tabId: number | null = null) => {
  const { customKy } = useKy();

  return useQuery({
    queryKey: ["changelogs", tabId],
    queryFn: async () =>
      await customKy.get<ChangelogResponse>(BASE_API + "/changelogs").json(),
  });
};
