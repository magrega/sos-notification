import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { noOrderInCard } from "../../assets/images";

interface NoDataOverlayProps {
  text?: string;
}

const NoDataOverlay = ({ text }: NoDataOverlayProps) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Box>
        <Box>
          <img
            src={noOrderInCard}
            alt="choose order"
            width="auto"
            height="auto"
          />
        </Box>
        <Box>
          <Typography>{text ? t(text) : ""}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NoDataOverlay;
