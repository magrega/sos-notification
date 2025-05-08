import { Typography } from "@mui/material";
import useAuth from "hooks/useAuth";
import { useVisualError } from "hooks/useError";
import { ChangeEvent, KeyboardEvent, RefObject, useState } from "react";
import { useTranslation } from "react-i18next";
import ByPassword from "./ByPassword";
import CheckLoginButton from "./CheckLoginButton";
import CodeTypeButtons from "./CodeTypeButtons";
import LoginPageInput from "./UI/LoginPageInput";
import { useCheckLoginQuery } from "hooks/QueryHooks/useAuthQuery";

interface LoginFormProps {
  setCodeLogin: () => void;
  countdownStateRef: RefObject<number>;
}

const LoginForm = ({ setCodeLogin, countdownStateRef }: LoginFormProps) => {
  const { t } = useTranslation();
  const { setSpreadAuth } = useAuth();
  const {
    data: CheckLoginData,
    mutateAsync: CheckLoginMutation,
    isPending: isCheckLoginPending,
    reset,
  } = useCheckLoginQuery();
  const authType = CheckLoginData?.auth_type;
  const { isErrorVisual, handleError } = useVisualError();

  const [login, setLogin] = useState("");
  const handleUsername = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (login && authType) reset();
    setLogin(target.value.toLowerCase());
  };

  const handleCheckLogin = async () => {
    if (!login || (login && CheckLoginData)) return;
    try {
      const data = await CheckLoginMutation(login);
      setSpreadAuth({ username: data?.username });
      localStorage.setItem("login", login);
    } catch (error) {
      handleError(error);
    }
  };

  const handleCheckLoginOnEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCheckLogin();
    }
  };

  return (
    <>
      <Typography variant="h6" marginBottom={3}>
        {t("loginPage.login")}
      </Typography>
      <form style={{ display: "contents" }}>
        <LoginPageInput
          value={login}
          onChange={handleUsername}
          error={isErrorVisual}
          placeholder={t("loginPage.loginPlaceholder")}
          autoComplete="login username name"
          onKeyDown={handleCheckLoginOnEnter}
          sx={{ marginBottom: 1 }}
          slotProps={{ input: { inputProps: { tabIndex: 1 } } }}
        />
        {authType === "password" && <ByPassword login={login} />}
        {authType === "code" && (
          <CodeTypeButtons
            login={login}
            setCodeLogin={setCodeLogin}
            countdownStateRef={countdownStateRef}
          />
        )}
        {!authType && (
          <CheckLoginButton
            onClick={handleCheckLogin}
            loading={isCheckLoginPending}
            tabIndex={2}
          />
        )}
      </form>
    </>
  );
};

export default LoginForm;
