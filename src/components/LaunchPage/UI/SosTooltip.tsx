import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

const SosTooltip = ({ children, title, ...props }: TooltipProps) => (
  <Tooltip title={title} {...props}>
    {children}
  </Tooltip>
);

export default SosTooltip;
