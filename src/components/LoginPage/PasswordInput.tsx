import { TextFieldProps } from "@mui/material";
import { useState } from "react";
import LoginPageInput from "./UI/LoginPageInput";
import ShowPasswordBtn from "./UI/ShowPasswordBtn";

const PasswordInput = (props: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);
  return (
    <LoginPageInput
      {...props}
      placeholder="password"
      type={showPassword ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <ShowPasswordBtn
              showPassword={showPassword}
              handleShowPassword={handleShowPassword}
            />
          ),
          inputProps: { tabIndex: 3 },
        },
      }}
      sx={{ marginBottom: 2 }}
    />
  );
};

export default PasswordInput;
