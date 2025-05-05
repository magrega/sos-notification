import { Box } from "@mui/material";
import { useLogsQuery } from "hooks/QueryHooks/useLogsQuery";

const LogSticker = () => {
  const { useInfiniteLogs } = useLogsQuery();
  const { data: logs } = useInfiniteLogs();
  const count = logs?.pages[0].count;

  return count ? (
    <Box
      sx={{
        position: "absolute",
        top: "-10px",
        right: "-10px",
        fontSize: "12px",
        fontWeight: "bold",
        padding: 0.2,
        color: "white",
        borderRadius: "4px",
        backgroundColor: "red",
      }}
    >
      {count}
    </Box>
  ) : null;
};

export default LogSticker;
