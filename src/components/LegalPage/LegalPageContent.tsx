import { Box } from "@mui/material";
import { useLegalQuery } from "hooks/QueryHooks/useLegalQuery";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import { OssResponse, TermsAndPrivacy } from "types/FetchInterfaces";
import { LegalType } from "types/SosTypes";
import LegalPageOssCards from "./LegalPageOssCards";

interface LegalPageContentProps {
  page?: LegalType;
}
const LegalPageContent = ({ page = "terms" }: LegalPageContentProps) => {
  const { t } = useTranslation();
  const { useGetLegal } = useLegalQuery();
  const { data, isFetching, isError } = useGetLegal(page);

  if (isFetching) return t("loading");
  if (isError) return t("error.loadingData");
  if (!data) return t("noData");

  return (
    <Box
      sx={{
        fontSize: ".8rem",
        "&>*": { wordBreak: "break-word", textAlign: "justify" },
      }}
    >
      {page === "oss" && <LegalPageOssCards data={data as OssResponse} />}
      {page !== "oss" && parse((data as TermsAndPrivacy)?.text || t("noData"))}
    </Box>
  );
};

export default LegalPageContent;
