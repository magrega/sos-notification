import { Button, ButtonProps, Tooltip } from "@mui/material";

interface CardButtonProps extends ButtonProps {
  tooltipText?: string;
}

const CardButtonWithTooltip = ({
  children,
  color,
  tooltipText = "",
  ...props
}: CardButtonProps) => (
  <Tooltip
    title={tooltipText}
    slotProps={{ popper: { disablePortal: true } }}
    placement="top"
  >
    <Button variant="contained" color={color} fullWidth {...props}>
      {children}
    </Button>
  </Tooltip>
);
export default CardButtonWithTooltip;
