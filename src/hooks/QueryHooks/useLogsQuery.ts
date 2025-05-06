import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useKy } from "hooks/useKy";
import { ILog, LogsResponse, SosResponse } from "types/FetchInterfaces";
import { GET_SOS, LOGS } from "./ApiVars";

export const useLogsQuery = () => {
  const { customKy } = useKy();

  const useInfiniteLogs = () => {
    return useInfiniteQuery({
      queryKey: ["infiniteLogs"],
      queryFn: async ({ pageParam }) => {
        const request = await customKy
          .get<LogsResponse>(
            `${LOGS}?_page=${pageParam}&_limit=5&_sort=id&_order=desc`
          )
          .json();

        return request;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, b) => (lastPage.length ? b + 1 : b),
    });
  };

  const useGetSos = () => {
    return useQuery({
      queryKey: ["sos"],
      queryFn: async () => {
        try {
          return await customKy.get<SosResponse>(GET_SOS).json();
        } catch (error) {
          console.error("Ошибка при получении данных sos", error);
        }
      },
    });
  };

  const useSendSos = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: async (sos: ILog) =>
        await customKy.post(LOGS, { json: sos }).json(),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["infiniteLogs"] });
        queryClient.invalidateQueries({ queryKey: ["logs"] });
      },
    });
  };

  const useEditLog = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: async ({
        logId,
        comment,
        status,
      }: {
        logId: number;
        comment?: string;
        status?: string;
      }) => {
        try {
          const payload = { log_id: logId, status, comment };

          await customKy.patch(`${LOGS}/${logId}`, {
            json: payload,
          });
        } catch (error) {
          console.error("Ошибка запроса", error);
          throw error;
        }
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["logs"] });
        queryClient.invalidateQueries({ queryKey: ["infiniteLogs"] });
      },
    });
  };

  return {
    useEditLog,
    useInfiniteLogs,
    useGetSos,
    useSendSos,
  };
};
