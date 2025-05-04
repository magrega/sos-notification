import { ButtonProps } from "@mui/material";
import LoginButton from "./UI/LoginButton";

const CheckLoginButton = (props: ButtonProps) => {
  return (
    <>
      <input type="password" style={{ display: "none" }} />
      <LoginButton {...props} />
    </>
  );
};

export default CheckLoginButton;
