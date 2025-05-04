import { Box, Typography } from "@mui/material";
import BackButton from "components/shared/BackButton";
import { CaptionHeading } from "components/shared/Typography";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <BackButton />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          padding: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "100px", md: "200px" },
            color: "rgba(0, 0, 0, .5)",
          }}
        >
          404
        </Typography>
        <Box>
          <CaptionHeading sx={{ fontWeight: 700, fontSize: "16px" }}>
            {t("error.error404")}
          </CaptionHeading>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
