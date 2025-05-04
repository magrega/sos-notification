import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: "100vw",
      }}
    >
      <CircularProgress color="info" />
    </Box>
  );
};

export default Loader;
