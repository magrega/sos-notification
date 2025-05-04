import { codeCountdown } from "localConstants";
import { useRef, useState } from "react";
import ByQuickCode from "./ByQuickCode";
import LoginForm from "./LoginForm";

const Login = () => {
  const countdownStateRef = useRef(codeCountdown);

  const [loginType, setLoginType] = useState<"password" | "quickCode">(
    "password"
  );
  const setCodeLogin = () => setLoginType("quickCode");
  const setPasswordLogin = () => setLoginType("password");

  return (
    <>
      {loginType === "password" && (
        <LoginForm
          setCodeLogin={setCodeLogin}
          countdownStateRef={countdownStateRef}
        />
      )}
      {loginType === "quickCode" && (
        <ByQuickCode
          setPasswordLogin={setPasswordLogin}
          countdownStateRef={countdownStateRef}
        />
      )}
    </>
  );
};

export default Login;
