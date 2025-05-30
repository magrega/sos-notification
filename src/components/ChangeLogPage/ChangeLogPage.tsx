import { Typography } from "@mui/material";
import InfoPageWrapper from "components/shared/InfoPageWrapper";
import { useChangeLogsQuery } from "hooks/QueryHooks/useChangeLogsQuery";
import { useTranslation } from "react-i18next";
import ChangeLogItem from "./ChangeLogItem";

const ChangeLogsPage = () => {
  const { t } = useTranslation();
  const { data, isFetching, isError } = useChangeLogsQuery();

  return (
    <>
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
