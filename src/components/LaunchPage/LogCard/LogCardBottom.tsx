import { Box, Typography } from "@mui/material";
import { calculateDaysBetweenDates } from "helpers";
import { t } from "i18next";
import { ILog } from "types/FetchInterfaces";
import LogStatus from "./LogStatus";

interface LogCardBottomProps {
  log: ILog;
}

const LogCardBottom = ({ log }: LogCardBottomProps) => {
  const daysPassed = calculateDaysBetweenDates(log.time_create);

  return (
    <Box sx={cardBottomStyles}>
      <Typography variant="body2">LOG ID: {log.id}</Typography>
      <LogStatus>{log.status}</LogStatus>
      <Typography variant="body2">
        {t("logCard.daysPassed", { daysPassed })}
      </Typography>
    </Box>
  );
};

export default LogCardBottom;

const cardBottomStyles = {
  display: "flex",
  alignItems: "flex-end",
  gap: 1,
  mb: "2px",
  textAlign: "center",
};
