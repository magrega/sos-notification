import { Typography } from "@mui/material";
import BackButton from "components/shared/BackButton";
import InfoPageWrapper from "components/shared/InfoPageWrapper";
import { useGetChangeLogs } from "hooks/QueryHooks/ChangeLog";
import { useTranslation } from "react-i18next";
import ChangeLogItem from "./ChangeLogItem";

const ChangeLogsPage = () => {
  const { t } = useTranslation();
  const { data, isFetching, isError } = useGetChangeLogs();

  return (
    <>
      <BackButton />
      <InfoPageWrapper>
        <Typography variant="h5" textAlign="center" sx={{ py: 2 }}>
          {t("changelogs.navigationLabel")}
        </Typography>
        {isFetching && t("loading")}
        {isError && t("error.loadingData")}
        {!data && t("noData")}
        {data?.map(({ version, date, content, id }) => (
          <ChangeLogItem
            key={id}
            version={version}
            date={date}
            content={content}
          />
        ))}
      </InfoPageWrapper>
    </>
  );
};

export default ChangeLogsPage;
