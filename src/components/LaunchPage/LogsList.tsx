import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LogCards from "./LogCards/LogCards";

const LogsList = () => {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        height: { xs: "100vh", md: "calc(100vh - 80px)" },
        px: 1,
        borderRadius: { xs: "4px", md: "4px" },
        my: { xs: 0, md: 1 },
      }}
    >
      <Typography variant="h5" textAlign="center" sx={{ py: 2 }}>
        {t("launchPage.unsolvedLogs")}
      </Typography>
      <LogCards />
    </Paper>
  );
};

export default LogsList;
