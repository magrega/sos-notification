import { Box, Theme, Typography } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";

const calculateColor = (theme: Theme, children: ReactNode) => {
  if (children === "Решено")
    return { backgroundColor: theme.palette.success.main };
  if (children === "Зарегистрировано")
    return { backgroundColor: theme.palette.primary.main };
  if (children === "В процессе")
    return { backgroundColor: theme.palette.warning.main };
  if (children === "Ошибочно")
    return { backgroundColor: theme.palette.error.main };
  if (children === "Ожидание")
    return { backgroundColor: "lightgrey", color: "black" };
};

const LogStatus = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={(theme) => ({
        color: "white",
        borderRadius: "4px",
        px: 1,
        py: 0.2,
        ...calculateColor(theme, children),
      })}
    >
      <Typography variant="body2">{children}</Typography>
    </Box>
  );
};

export default LogStatus;
