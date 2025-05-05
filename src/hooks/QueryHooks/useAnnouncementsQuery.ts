import { useQuery } from "@tanstack/react-query";
import { useKy } from "hooks/useKy";
import { Announcement } from "types/FetchInterfaces";
import { ANNOUNCEMENT } from "./ApiVars";

export const useAnnouncementsQuery = () => {
  const { customKy } = useKy();

  return useQuery({
    queryKey: ["announcements"],
    queryFn: async () =>
      await customKy.get<Announcement[]>(ANNOUNCEMENT).json(),
  });
};
