import { Box, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

const InfoPageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ background: "white", height: "100%", overflowY: "auto" }}>
      <Paper
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: { xs: "15px", md: "30px" },
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default InfoPageWrapper;
