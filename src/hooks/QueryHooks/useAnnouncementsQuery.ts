import { useQuery } from "@tanstack/react-query";
import { Announcement } from "types/FetchInterfaces";
import { ANNOUNCEMENT } from "./ApiVars";
import { useQueryUtils } from "./useQueryUtils";

export const useAnnouncementsQuery = () => {
  const { customKy } = useQueryUtils();

  return useQuery({
    queryKey: ["announcements"],
    queryFn: async () =>
      await customKy.get<Announcement[]>(ANNOUNCEMENT).json(),
  });
};
