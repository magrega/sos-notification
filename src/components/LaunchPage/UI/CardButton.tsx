import { Button, ButtonProps } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

const CardButton = (
  { children, color, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => (
  <Button
    variant="contained"
    color={color}
    sx={{ width: "100%" }}
    {...props}
    ref={ref}
  >
    {children}
  </Button>
);
export default forwardRef(CardButton);
