import { useQuery } from "@tanstack/react-query";
import { Changelog } from "types/FetchInterfaces";
import { CHANGELOGS } from "./ApiVars";
import { useQueryUtils } from "./useQueryUtils";

export const useChangeLogsQuery = () => {
  const { customKy } = useQueryUtils();

  return useQuery({
    queryKey: ["changelogs"],
    queryFn: async () => await customKy.get<Changelog[]>(CHANGELOGS).json(),
  });
};
