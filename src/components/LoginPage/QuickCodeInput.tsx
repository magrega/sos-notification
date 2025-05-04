import { Box } from "@mui/material";
import VerificationInput from "react-verification-input";
import "./VerificationInput.css";

interface QuickCodeInputProps {
  code: string;
  handleCodeInput: (value: string) => void;
  handleCodeLogin: (code: string) => void;
  isErrorVisual: boolean;
}

const QuickCodeInput = ({
  code,
  handleCodeInput,
  handleCodeLogin,
  isErrorVisual,
}: QuickCodeInputProps) => {
  return (
    <Box sx={{ my: 2, textAlign: "center" }}>
      <VerificationInput
        value={code}
        autoFocus
        inputProps={{
          inputMode: "numeric",
          autoComplete: "one-time-code",
          className: "code-input",
        }}
        onChange={handleCodeInput}
        onComplete={handleCodeLogin}
        placeholder=""
        validChars="0-9"
        length={6}
        classNames={{
          container: "code-input-container",
          character: `code-input-character ${isErrorVisual ? "error" : ""}`,
        }}
      />
    </Box>
  );
};

export default QuickCodeInput;
