import { Toolbar } from "@mui/material";
import BackButton from "components/shared/BackButton";
import InfoPageWrapper from "components/shared/InfoPageWrapper";
import { useTranslation } from "react-i18next";
import { LegalType } from "types/SosTypes";
import LegalPageContent from "./LegalPageContent";

interface LegalPageProps {
  page?: LegalType;
}

const LegalPage = ({ page = "terms" }: LegalPageProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Toolbar>
        <BackButton>{t("back")}</BackButton>
      </Toolbar>
      <InfoPageWrapper>
        <LegalPageContent page={page} />
      </InfoPageWrapper>
    </>
  );
};

export default LegalPage;
