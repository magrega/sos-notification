import { Button, ButtonProps } from "@mui/material";

const SosButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      color="secondary"
      variant="contained"
      type="submit"
      loadingPosition="start"
      {...props}
    >
      {children}
    </Button>
  );
};

export default SosButton;
