import { Box } from "@mui/material";
import { useLogsQuery } from "hooks/QueryHooks/useLogsQuery";

const LogSticker = () => {
  const { data: logs } = useLogsQuery();
  const count = logs?.length;

  if (!count || count <= 0) return null;

  return (
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
  );
};

export default LogSticker;
