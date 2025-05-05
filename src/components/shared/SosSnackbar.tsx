import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { Dispatch, SetStateAction, SyntheticEvent } from "react";

interface SosSnackbarProps {
  isSnackbarOpen: boolean;
  setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
  message: string;
  isError: boolean;
}

const SosSnackbar = ({
  isSnackbarOpen,
  setSnackbarOpen,
  message,
  isError,
}: SosSnackbarProps) => {
  const handleClose = (
    _: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={isSnackbarOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={action}
      sx={(theme) => ({
        "& .MuiSnackbarContent-root": {
          backgroundColor: isError
            ? theme.palette.error.main
            : theme.palette.success.main,
        },
      })}
    />
  );
};

export default SosSnackbar;
