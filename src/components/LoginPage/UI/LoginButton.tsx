import { Button, ButtonProps } from "@mui/material";
import { useTranslation } from "react-i18next";

const LoginButton = (props: ButtonProps) => {
  const { t } = useTranslation();

  return (
    <Button variant="contained" {...props}>
      {t("loginPage.loginButton")}
    </Button>
  );
};

export default LoginButton;
