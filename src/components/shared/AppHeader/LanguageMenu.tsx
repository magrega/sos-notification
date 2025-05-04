import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TranslateIcon from "@mui/icons-material/Translate";
import {
  Box,
  ClickAwayListener,
  Divider,
  ListItemIcon,
  MenuItem,
  MenuList,
  Popper,
  Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageFlag from "./LanguageFlag";

interface LanguageMenuProps {
  closeMenu: () => void;
}

const LanguageMenu = ({ closeMenu }: LanguageMenuProps) => {
  const { i18n, t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    closeMenu();
  };

  const handleLanguage = (e: MouseEvent<HTMLElement>) => {
    const text = e.currentTarget.innerText;
    if (!text) return;
    if (text === t("language.en")) i18n.changeLanguage("en");
    if (text === t("language.ru")) i18n.changeLanguage("ru");
    handleClose();
  };

  return (
    <>
      <MenuItem id="appbar-menu-language" onClick={handleClick}>
        <ListItemIcon>
          <TranslateIcon fontSize="small" />
        </ListItemIcon>
        <Typography textAlign="center">
          {t(`language.${i18n.language}`)}
        </Typography>
        <NavigateNextIcon fontSize="small" sx={{ marginLeft: "auto" }} />
      </MenuItem>
      <Popper
        id="language-menu-select"
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal
        sx={{
          backgroundColor: "white",
          zIndex: 1,
          boxShadow:
            "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
        }}
      >
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
          <Box>
            <MenuList>
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
                  {t("language.title")}
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLanguage}>
                <LanguageFlag language={"en"} />
                {t("language.en")}
              </MenuItem>
              <MenuItem onClick={handleLanguage}>
                <LanguageFlag language={"ru"} />
                {t("language.ru")}
              </MenuItem>
            </MenuList>
          </Box>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default LanguageMenu;
