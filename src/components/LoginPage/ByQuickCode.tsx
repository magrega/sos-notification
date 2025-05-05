import { Box, Button, Typography } from "@mui/material";
import { useAuthQuery } from "hooks/QueryHooks/useAuthQuery";
import useAuth from "hooks/useAuth";
import { RefObject, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useVisualError } from "../../hooks/useError";
import QuickCodeCountdown from "./QuickCodeCountdown";
import QuickCodeInput from "./QuickCodeInput";
import LoginButton from "./UI/LoginButton";
import "./VerificationInput.css";

interface ByQuickCodeProps {
  setPasswordLogin: () => void;
  countdownStateRef: RefObject<number>;
}

const ByQuickCode = ({
  setPasswordLogin,
  countdownStateRef,
}: ByQuickCodeProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { auth, setSpreadAuth } = useAuth();
  const login = auth?.username;

  const { LoginByCode } = useAuthQuery();
  const { mutateAsync: CodeLoginMutation, isPending } = LoginByCode();

  const { isErrorVisual, handleError } = useVisualError();
  const [code, setCode] = useState("");

  const handleCodeInput = (value: string) => setCode(value);

  const handleCodeLogin = async (code: string) => {
    try {
      if (!login) return;
      const data = await CodeLoginMutation({
        code,
        login,
      });

      setSpreadAuth({
        accessToken: data?.accessToken,
      });
      localStorage.setItem("isLogged", "true");
      navigate("/", { replace: true });
    } catch (error) {
      handleError(error);
    }
  };

  const handleCodeLoginForm = () => {
    handleCodeLogin(code);
  };

  return (
    <>
      <Typography variant="h6" marginBottom={3}>
        {t("loginPage.insertCode")}
      </Typography>
      <Typography marginBottom={3}>
        {t("loginPage.codeSent", { login })}
      </Typography>
      <form onSubmit={handleCodeLoginForm} style={{ display: "contents" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{login}</Typography>
          <Button
            onClick={setPasswordLogin}
            sx={{ p: 0, textTransform: "capitalize" }}
          >
            {t("loginPage.change")}
          </Button>
        </Box>
        <QuickCodeInput
          code={code}
          handleCodeInput={handleCodeInput}
          handleCodeLogin={handleCodeLogin}
          isErrorVisual={isErrorVisual}
        />
        <LoginButton loading={isPending} onClick={handleCodeLoginForm} />
        <QuickCodeCountdown countdownStateRef={countdownStateRef} />
      </form>
    </>
  );
};

export default ByQuickCode;
