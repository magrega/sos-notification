import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ButtonProps, IconButton } from "@mui/material";

interface ShowPasswordBtnProps extends ButtonProps {
  showPassword: boolean;
  handleShowPassword: () => void;
}

const ShowPasswordBtn = ({
  showPassword,
  handleShowPassword,
}: ShowPasswordBtnProps) => {
  return (
    <IconButton
      aria-label={showPassword ? "hide the password" : "display the password"}
      onClick={handleShowPassword}
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  );
};

export default ShowPasswordBtn;
