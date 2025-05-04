import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from "@mui/material";
import { MouseEvent } from "react";

interface LogStatusButtonsProps {
  logStatus: string;
  handleChange: (_: MouseEvent<HTMLElement>, newStatus: string) => void;
}

const LogStatusButtons = ({
  logStatus,
  handleChange,
}: LogStatusButtonsProps) => {
  const isVerticalButtons = useMediaQuery("(min-width:400px)");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={ToggleButtonsBoxStyles}>
      <ToggleButtonGroup
        exclusive
        value={logStatus}
        onChange={handleChange}
        aria-label="status-buttons"
        fullWidth
        orientation={isVerticalButtons ? "horizontal" : "vertical"}
      >
        <ToggleButton value="Зарегистрировано" color="primary">
          Зарегистрировано
        </ToggleButton>
        <ToggleButton value="В процессе" color="warning">
          В процессе
        </ToggleButton>
        <ToggleButton value="Решено" color="success">
          Решено
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        exclusive
        value={logStatus}
        onChange={handleChange}
        aria-label="accidental-button"
        fullWidth={isMobile}
      >
        <ToggleButton value="Ошибочно" color="error">
          Ошибочно
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default LogStatusButtons;

const ToggleButtonsBoxStyles = {
  display: "flex",
  gap: 1,
  mb: 2,
  flexWrap: { xs: "wrap", md: "nowrap" },
};
