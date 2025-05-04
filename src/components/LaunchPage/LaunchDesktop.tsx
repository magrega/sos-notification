import { Grid2 } from "@mui/material";
import LogsList from "./LogsList";
import SosFormWrapper from "./SosForm/SosFormWrapper";

const LaunchDesktop = () => {
  return (
    <Grid2 container spacing={1} sx={{ overflowY: "auto" }}>
      <Grid2
        size={{ xs: 12, md: 8 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <SosFormWrapper />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <LogsList />
      </Grid2>
    </Grid2>
  );
};

export default LaunchDesktop;
