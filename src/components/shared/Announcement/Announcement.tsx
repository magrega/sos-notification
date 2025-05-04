import { Alert, Box } from "@mui/material";
import { useGetAnnouncements } from "hooks/QueryHooks/Announcements";
import { useLocation } from "react-router";

enum Pages {
  "/" = 82,
  "/log" = 86,
  "/notifications" = 83,
}

function stripHtml(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

const Announcement = () => {
  const { pathname } = useLocation();

  const { data: announcements } = useGetAnnouncements(
    Pages[pathname as keyof typeof Pages] || null
  );

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
