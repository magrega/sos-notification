import { Grid2, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

const TabsGridContainer = ({ children }: PropsWithChildren) => {
  return (
    <Paper elevation={4} sx={paperStyles}>
      <Grid2
        container
        sx={{
          height: { xs: "100vh", md: "calc(-200px + 100vh)" },
          flexFlow: { xs: "column", md: "row" },
          overflow: "hidden",
        }}
      >
        {children}
      </Grid2>
    </Paper>
  );
};

export default TabsGridContainer;

const paperStyles = {
  width: { xs: "100%", md: "80%" },
  maxWidth: { md: "1500px" },
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
