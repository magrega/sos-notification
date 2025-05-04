import {
  Box,
  Card,
  CardContent,
  CardOwnProps,
  Divider,
  Typography,
} from "@mui/material";
import { useSwipe } from "hooks/useSwipe";
import { ForwardedRef, forwardRef, memo, useState } from "react";
import { ILog } from "types/FetchInterfaces";
import LogCardBottom from "./LogCardBottom";
import LogCardTop from "./LogCardTop";
import LogModal from "./LogModal";

interface LogCardProps extends CardOwnProps {
  log: ILog;
}

const LogCard = (
  { log, ...props }: LogCardProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe();

  const [isSwipeMenuOpen, setSwipeMenuOpen] = useState(false);
  const toggleMenu = () => setSwipeMenuOpen((prev) => !prev);
  const closeSwipeMenu = () => setSwipeMenuOpen(false);
  const handleTouchEnd = () => {
    const swipeDirection = onTouchEnd();
    if (swipeDirection === "left") setSwipeMenuOpen(true);
    if (swipeDirection === "right") setSwipeMenuOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        mb: 1,
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Card
        {...props}
        variant="outlined"
        ref={ref}
        sx={{
          transform: isSwipeMenuOpen ? "translateX(-195px)" : "translateX(0)",
          ...cardStyles,
        }}
      >
        <CardContent
          sx={{ px: { xs: 1, md: 2 }, py: 0, "&:last-child": { pb: 1 } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <Box>
              <LogCardTop
                log={log}
                toggleMenu={toggleMenu}
                isSwipeMenuOpen={isSwipeMenuOpen}
              />
              <Divider />
              <Typography
                sx={{ fontWeight: 700, pt: { xs: 0, md: "6px" }, my: 1 }}
              >
                {log.protocol}
              </Typography>
            </Box>
            <Typography
              sx={{ mb: 3, wordBreak: "break-word", fontStyle: "italic" }}
            >
              {log.comment}
            </Typography>
            <LogCardBottom log={log} />
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          width: isSwipeMenuOpen ? "195px" : "0px",
          ...logModalBoxStyles,
        }}
      >
        <LogModal log={log} closeSwipeMenu={closeSwipeMenu} />
      </Box>
    </Box>
  );
};

export default memo(forwardRef(LogCard));

const logModalBoxStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%",
  transition: "width 0.3s",
};

const cardStyles = {
  width: "100%",
  transition: "transform 0.3s",
};
