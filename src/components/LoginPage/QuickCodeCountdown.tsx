import { Button, Typography } from "@mui/material";
import { RequestCode } from "hooks/QueryHooks/Auth";
import useAuth from "hooks/useAuth";
import useSnackbar from "hooks/useSnackbar";
import { RefObject, useState } from "react";
import Countdown from "react-countdown";
import { Trans, useTranslation } from "react-i18next";

type CountdownRendererArgs = {
  completed: boolean;
  total: number;
};

interface QuickCodeCountdownProps {
  countdownStateRef: RefObject<number>;
}

const QuickCodeCountdown = ({ countdownStateRef }: QuickCodeCountdownProps) => {
  const { t } = useTranslation();
  const { mutateAsync: sendCodeData, isPending } = RequestCode();
  const { handleSnackbar } = useSnackbar();
  const { auth } = useAuth();
  const login = auth?.username;

  const [k, setK] = useState(false);

  const handleRestartTimer = async () => {
    if (!login) return;
    const otp = Math.floor(100000 + Math.random() * 900000);
    await sendCodeData({
      otp,
      login,
    });
    countdownStateRef.current =
      new Date().getTime() + 1000 * 60 * 2 - new Date().getTime();
    handleSnackbar(`OTP PASSWORD: ${otp}`);

    setK((i) => !i);
  };

  const renderer = ({ completed, total }: CountdownRendererArgs) => {
    let countdown;
    if (completed) {
      countdownStateRef.current = 0;
      return (
        <Button
          onClick={handleRestartTimer}
          sx={{ marginY: 1 }}
          loading={isPending}
        >
          {t("loginPage.getCode")}
        </Button>
      );
    } else if (total) {
      countdownStateRef.current = total;
      countdown = total / 1000;
    }

    return (
      <Typography sx={{ my: 2, p: "6px 8px", textAlign: "center" }}>
        <Trans
          i18nKey="loginPage.countdown"
          values={{ seconds: countdown }}
          components={{
            seconds: (
              <span style={{ minWidth: "21px", display: "inline-block" }} />
            ),
          }}
        />
      </Typography>
    );
  };

  return (
    <Countdown
      key={String(k)}
      zeroPadTime={0}
      daysInHours
      renderer={renderer}
      date={Date.now() + countdownStateRef.current}
    />
  );
};

export default QuickCodeCountdown;
