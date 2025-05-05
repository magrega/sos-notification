import { useMutation, useQuery } from "@tanstack/react-query";
import { useKy } from "hooks/useKy";
import { OssResponse, TermsAndPrivacy } from "types/FetchInterfaces";
import { LegalType } from "types/SosTypes";
import { BASE_API, USERS } from "./ApiVars";
import { useAuthQuery } from "./Auth";

type LegalTypeMap = {
  terms: TermsAndPrivacy;
  privacy: TermsAndPrivacy;
  oss: OssResponse;
};

export const useGetLegalQuery = <T extends LegalType>(page: T) => {
  const { customKy } = useKy();

  return useQuery<LegalTypeMap[T]>({
    queryKey: ["legal", page],
    queryFn: async () =>
      await customKy.get(`${BASE_API}/${page}`).json<LegalTypeMap[T]>(),
  });
};

export const useAgreeToTerms = () => {
  const { customKy } = useKy();
  const { useGetUser } = useAuthQuery();
  const { data: user } = useGetUser();

  return useMutation({
    mutationFn: async () => {
      if (!user?.username) return;

      await customKy.patch(`${USERS}/${user?.id}/`, {
        json: { isTermsApprovalRequired: false },
      });
    },
  });
};
