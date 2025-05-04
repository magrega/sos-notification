import { Box, Button, ButtonProps } from "@mui/material";
import NoDataOverlay from "components/shared/NoDataOverlay";
import { t } from "i18next";

const NoCards = (props: ButtonProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 1,
      }}
    >
      <Button {...props}>{t("LogCards.requestCardsBtn")}</Button>
      <NoDataOverlay text="LogCards.noCards" />
    </Box>
  );
};

export default NoCards;
