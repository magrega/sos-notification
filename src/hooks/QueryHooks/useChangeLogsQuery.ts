import { useQuery } from "@tanstack/react-query";
import { useKy } from "hooks/useKy";
import { Changelog } from "types/FetchInterfaces";
import { CHANGELOGS } from "./ApiVars";

export const useChangeLogsQuery = () => {
  const { customKy } = useKy();

  return useQuery({
    queryKey: ["changelogs"],
    queryFn: async () => await customKy.get<Changelog[]>(CHANGELOGS).json(),
  });
};
