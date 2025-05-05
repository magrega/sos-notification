import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import useAuth from "hooks/useAuth";
import useSnackbar from "hooks/useSnackbar";
import { MouseEvent, RefObject, useState } from "react";
import { useTranslation } from "react-i18next";
import { CodeType } from "./LoginTypes";
import ExpandableWrapper from "./UI/ExpandableWrapper";
import LoginButton from "./UI/LoginButton";
import { useAuthQuery } from "hooks/QueryHooks/Auth";

interface CodeTypeButtonsProps {
  login: string;
  setCodeLogin: () => void;
  countdownStateRef: RefObject<number>;
}

const CodeTypeButtons = ({
  login,
  setCodeLogin,
  countdownStateRef,
}: CodeTypeButtonsProps) => {
  const { t } = useTranslation();
  const { setSpreadAuth } = useAuth();
  const { RequestCode } = useAuthQuery();

  const { handleSnackbar } = useSnackbar();

  const { mutateAsync: sendCodeData, isPending: isRequestCodePending } =
    RequestCode();

  const [codeType, setCodeType] = useState<CodeType>("email");

  const handleChange = (_: MouseEvent<HTMLElement>, type: CodeType) => {
    if (type !== null) setCodeType(type);
  };

  const handleRequireCode = async () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    await sendCodeData({
      otp,
      login,
    });
    countdownStateRef.current =
      new Date().getTime() + 1000 * 60 * 2 - new Date().getTime();
    setSpreadAuth({ codeType });
    handleSnackbar(`OTP PASSWORD: ${otp}`);
    setCodeLogin();
  };
  return (
    <>
      <ExpandableWrapper>
        <ToggleButtonGroup
          value={codeType}
          onChange={handleChange}
          color="primary"
          aria-label="toggle-code-type"
          exclusive
          fullWidth
          sx={{
            button: { padding: "3px" },
            "& > button:focus-visible": {
              border: "1px solid grey",
            },
          }}
        >
          <ToggleButton tabIndex={2} value={"mobile"} sx={{}}>
            {t("loginPage.smsCode")}
          </ToggleButton>
          <ToggleButton tabIndex={3} value={"email"}>
            {t("loginPage.emailCode")}
          </ToggleButton>
        </ToggleButtonGroup>
      </ExpandableWrapper>
      <LoginButton
        tabIndex={4}
        loading={isRequestCodePending}
        onClick={handleRequireCode}
      />
    </>
  );
};

export default CodeTypeButtons;
