import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PolicyIcon from "@mui/icons-material/Policy";
import {
  Box,
  ClickAwayListener,
  Divider,
  ListItemIcon,
  MenuItem,
  Popper,
  Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import NavLinkStyled from "../NavLinkStyled";

interface LegalMenuProps {
  closeMenu: () => void;
}

const LegalMenu = ({ closeMenu }: LegalMenuProps) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    closeMenu();
  };

  return (
    <>
      <MenuItem id="appbar-menu-legal" onClick={handleClick}>
        <ListItemIcon>
          <PolicyIcon fontSize="small" />
        </ListItemIcon>
        <Typography textAlign="center">{t("legal.title")}</Typography>
        <NavigateNextIcon fontSize="small" sx={{ marginLeft: "auto" }} />
      </MenuItem>
      <Popper
        id="appbar-menu-legal"
        anchorEl={anchorEl}
        open={open}
        sx={{
          backgroundColor: "white",
          zIndex: 1,
          boxShadow:
            "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
        }}
      >
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
          <Box>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon
                sx={{
                  "&.MuiListItemIcon-root": {
                    minWidth: 0,
                  },
                }}
              >
                <ArrowLeftIcon fontSize="small" />
              </ListItemIcon>
              <Typography sx={{ marginX: "auto" }}>
                {t("legal.title")}
              </Typography>
            </MenuItem>
            <Divider />
            <NavLinkStyled to="/tos">
              <MenuItem onClick={handleClose}>{t("legal.termsofuse")}</MenuItem>
            </NavLinkStyled>
            <NavLinkStyled to="/privacy">
              <MenuItem onClick={handleClose}>{t("legal.privacy")}</MenuItem>
            </NavLinkStyled>
            <NavLinkStyled to="/oss">
              <MenuItem onClick={handleClose}>
                {t("legal.openSourceSoftwareAttribution")}
              </MenuItem>
            </NavLinkStyled>
          </Box>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default LegalMenu;
