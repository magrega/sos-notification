import { Alert, Box } from "@mui/material";
import { useAnnouncementsQuery } from "hooks/QueryHooks/useAnnouncementsQuery";

function stripHtml(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

const Announcement = () => {
  const { data: announcements } = useAnnouncementsQuery();
  console.log(announcements);

  if (!announcements || announcements.length === 0) return null;
  return (
    <Box>
      {announcements.map(({ id, text, style }) => (
        <Alert square key={id} severity={style}>
          {stripHtml(text)}
        </Alert>
      ))}
    </Box>
  );
};

export default Announcement;
