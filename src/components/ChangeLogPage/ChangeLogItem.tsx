import { Box, Card, Typography } from "@mui/material";
import FormatDate from "components/LaunchPage/FormatDate/FormatDate";

interface ChangeLogItemProps {
  version: string;
  date: string;
  content: string;
}

const ChangeLogItem = ({ version, date, content }: ChangeLogItemProps) => {
  return (
    <Card elevation={2} sx={{ mt: 1, mb: 3, p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
        <Typography sx={versionStyles}>{version}</Typography>
        <FormatDate
          day="numeric"
          month="long"
          year="numeric"
          timeStart={date}
        />
      </Box>
      <pre style={{ whiteSpace: "break-spaces" }}>{content}</pre>
    </Card>
  );
};

export default ChangeLogItem;

const versionStyles = {
  display: "inline",
  p: 1,
  borderRadius: "10px",
  lineHeight: 1,
  color: "white",
  backgroundColor: "success.main",
};
