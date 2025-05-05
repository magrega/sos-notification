import { Paper, Typography } from "@mui/material";
import Loader from "components/shared/Loader/Loader";
import { useLogsQuery } from "hooks/QueryHooks/useLogsQuery";
import { useTranslation } from "react-i18next";
import SosForm from "./SosForm";

const SosFormWrapper = () => {
  const { useGetSos } = useLogsQuery();
  const { data: sosFormData, isLoading } = useGetSos();
  const { t } = useTranslation();

  if (sosFormData) {
    if (!Object.values(sosFormData).some((country) => country.length))
      return (
        <Paper sx={{ p: 1, m: 1, textAlign: "center" }}>
          <Typography>{t("sosForm.noNotifications")}</Typography>
        </Paper>
      );

    return <SosForm sosFormData={sosFormData} isLoading={isLoading} />;
  }

  return <Loader />;
};

export default SosFormWrapper;
