import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser } from "helpers";
import useAuth from "hooks/useAuth";
import { useKy } from "hooks/useKy";
import { OssResponse, TermsAndPrivacy } from "types/FetchInterfaces";
import { LegalType } from "types/SosTypes";
import { BASE_API, USERS } from "./ApiVars";

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
  const { auth } = useAuth();

  return useMutation({
    mutationFn: async () => {
      if (!auth?.username) return;
      const user = await getUser(auth?.username);

      await customKy.patch(`${USERS}/${user?.id}/`, {
        json: { isTermsApprovalRequired: false },
      });
    },
  });
};
