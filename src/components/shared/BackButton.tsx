import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { PageHeading } from "./Typography";

const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Toolbar>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          color: "white",
          "&:hover": { textDecoration: "underline" },
          "& .MuiButton-startIcon>*:nth-of-type(1)": {
            fontSize: "30px",
            paddingBottom: "2px",
          },
        }}
        startIcon={<KeyboardArrowLeftIcon />}
      >
        <PageHeading>{t("back")}</PageHeading>
      </Button>
    </Toolbar>
  );
};

export default BackButton;
