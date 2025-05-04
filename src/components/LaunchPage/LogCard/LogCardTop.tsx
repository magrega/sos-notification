import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Avatar, Box, Typography } from "@mui/material";
import { ILog } from "types/FetchInterfaces";
import FormatDate from "../FormatDate/FormatDate";
import CardMenu from "./CardMenu";

interface LogCardTopProps {
  log: ILog;
  toggleMenu: () => void;
  isSwipeMenuOpen: boolean;
}

const LogCardTop = ({ log, toggleMenu, isSwipeMenuOpen }: LogCardTopProps) => {
  return (
    <Box sx={cardTopStyles}>
      <Box>
        <Box sx={{ display: "flex", columnGap: 1, mr: "auto" }}>
          <Avatar sx={{ width: "30px", height: "30px" }} />
          <Typography variant="body2" sx={{ alignSelf: "center" }}>
            {log.pc_name}
          </Typography>
        </Box>
      </Box>
      <Box>
        <CalendarMonthIcon fontSize="small" />
        <Typography sx={{ ml: 0.5 }}>
          <FormatDate
            day="2-digit"
            month="2-digit"
            year="numeric"
            timeStart={log?.time_create}
          />
        </Typography>
      </Box>
      <CardMenu
        log={log}
        toggleMenu={toggleMenu}
        isSwipeMenuOpen={isSwipeMenuOpen}
      />
    </Box>
  );
};

export default LogCardTop;

const cardTopStyles = {
  display: "flex",
  py: 1,
  alignItems: "center",
  "&>div": {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  "&>div:nth-of-type(1)": { marginRight: "auto" },
  "&>div:nth-of-type(3)": { marginLeft: "auto" },
};
