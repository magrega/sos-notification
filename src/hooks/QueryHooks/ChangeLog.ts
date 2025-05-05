import { useQuery } from "@tanstack/react-query";
import { useKy } from "hooks/useKy";
import { CHANGELOGS } from "./ApiVars";
import { Changelog } from "types/FetchInterfaces";

export const useGetChangeLogs = () => {
  const { customKy } = useKy();

  return useQuery({
    queryKey: ["changelogs"],
    queryFn: async () => await customKy.get<Changelog[]>(CHANGELOGS).json(),
  });
};
