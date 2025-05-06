import { Box, Theme, Typography } from "@mui/material";
import { LogStatusesType } from "types/SosTypes";

const calculateColor = (theme: Theme, status: LogStatusesType) => {
  if (!status) return;
  const statuses = {
    Решено: { backgroundColor: theme.palette.success.main },
    Зарегистрировано: { backgroundColor: theme.palette.primary.main },
    "В процессе": { backgroundColor: theme.palette.warning.main },
    Ошибочно: { backgroundColor: theme.palette.error.main },
    Ожидание: { backgroundColor: "lightgrey", color: "black" },
  };

  return statuses[status];
};

interface LogStatusProps {
  status: LogStatusesType;
}

const LogStatus = ({ status }: LogStatusProps) => {
  return (
    <Box
      sx={(theme) => ({
        color: "white",
        borderRadius: "4px",
        px: 1,
        py: 0.2,
        ...calculateColor(theme, status),
      })}
    >
      <Typography variant="body2">{status}</Typography>
    </Box>
  );
};

export default LogStatus;
