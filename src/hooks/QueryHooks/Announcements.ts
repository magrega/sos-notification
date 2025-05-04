import { useQuery } from "@tanstack/react-query";
import { useKy } from "hooks/useKy";
import { Announcement } from "types/FetchInterfaces";
import { BASE_API } from "./ApiVars";

export const useGetAnnouncements = (tabId: number | null = null) => {
  const { customKy } = useKy();

  return useQuery({
    queryKey: ["announcements", tabId],
    queryFn: async () =>
      await customKy.get<Announcement[]>(BASE_API + "announcement").json(),
  });
};
