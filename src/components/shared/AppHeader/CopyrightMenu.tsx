import { MenuItem, Typography } from "@mui/material";
import { copyright } from "localConstants";

const CopyrightMenu = () => {
  return (
    <>
      <MenuItem key="Caption">
        <Typography variant="caption" textAlign="center">
          {copyright}
        </Typography>
      </MenuItem>
      <MenuItem key="Node">
        <Typography variant="caption" textAlign="center">
          react node env - {process.env.NODE_ENV}
        </Typography>
      </MenuItem>
    </>
  );
};

export default CopyrightMenu;
