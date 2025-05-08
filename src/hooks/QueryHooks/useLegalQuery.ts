import { useMutation, useQuery } from "@tanstack/react-query";
import { OssResponse, TermsAndPrivacy } from "types/FetchInterfaces";
import { LegalType } from "types/SosTypes";
import { BASE_API, USERS } from "./ApiVars";
import { useGetUserQuery } from "./useAuthQuery";
import { useQueryUtils } from "./useQueryUtils";

type LegalTypeMap = {
  terms: TermsAndPrivacy;
  privacy: TermsAndPrivacy;
  oss: OssResponse;
};

export const useGetLegalQuery = <T extends LegalType>(page: T) => {
  const { customKy } = useQueryUtils();
  return useQuery<LegalTypeMap[T]>({
    queryKey: ["legal", page],
    queryFn: async () =>
      await customKy.get(`${BASE_API}/${page}`).json<LegalTypeMap[T]>(),
  });
};

export const useAgreeToTermsMutation = () => {
  const { customKy } = useQueryUtils();
  const { data: user } = useGetUserQuery();

  return useMutation({
    mutationFn: async () => {
      if (!user?.username) return;

      await customKy.patch(`${USERS}/${user?.id}/`, {
        json: { isTermsApprovalRequired: false },
      });
    },
  });
};
