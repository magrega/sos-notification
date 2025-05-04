import BackButton from "components/shared/BackButton";
import InfoPageWrapper from "components/shared/InfoPageWrapper";
import { LegalType } from "types/SosTypes";
import LegalPageContent from "./LegalPageContent";

interface LegalPageProps {
  page?: LegalType;
}

const LegalPage = ({ page = "terms" }: LegalPageProps) => {
  return (
    <>
      <BackButton />
      <InfoPageWrapper>
        <LegalPageContent page={page} />
      </InfoPageWrapper>
    </>
  );
};

export default LegalPage;
