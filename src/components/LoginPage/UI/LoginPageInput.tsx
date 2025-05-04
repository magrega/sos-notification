import { TextField, TextFieldProps } from "@mui/material";
import styled from "styled-components";

const LoginPageInput = styled((props: TextFieldProps) => (
  <TextField hiddenLabel variant="filled" required fullWidth {...props} />
))(() => ({
  "&& .Mui-error": {
    border: "1px solid red",
  },
  ".MuiFilledInput-root": {
    paddingRight: 0,
  },
})) as typeof TextField;

export default LoginPageInput;
