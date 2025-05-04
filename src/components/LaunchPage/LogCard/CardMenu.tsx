import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import Menu from "@mui/material/Menu";
import { MouseEvent, useState } from "react";
import { ILog } from "types/FetchInterfaces";
import LogMenuModal from "./LogMenuModal";

interface CardMenuProps {
  log: ILog;
  toggleMenu: () => void;
  isSwipeMenuOpen: boolean;
}

const CardMenu = ({ log, toggleMenu, isSwipeMenuOpen }: CardMenuProps) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isMobile) setAnchorEl(e.currentTarget);
    if (isMobile) toggleMenu();
  };
  const handleClose = () => setAnchorEl(null);

  const openState = isMobile ? isSwipeMenuOpen : open;

  return (
    <Box>
      <IconButton
        sx={{ maxWidth: "40px", ml: "auto" }}
        id="card-button"
        aria-haspopup="true"
        aria-controls={open ? "card-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {openState ? <CloseIcon /> : <MoreHorizIcon />}
      </IconButton>
      <Menu
        id="card-menu"
        anchorEl={anchorEl}
        open={open && !isMobile}
        onClose={handleClose}
        disableScrollLock
      >
        <LogMenuModal log={log} closeMenu={handleClose} />
      </Menu>
    </Box>
  );
};

export default CardMenu;
