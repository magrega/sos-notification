import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { ListItemIcon, MenuItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface ChangelogMenuProps {
  closeMenu: () => void;
}

const ChangelogMenu = ({ closeMenu }: ChangelogMenuProps) => {
  const { t } = useTranslation();

  return (
    <>
      <MenuItem id="appbar-menu-legal" onClick={closeMenu}>
        <ListItemIcon>
          <ManageHistoryIcon fontSize="small" />
        </ListItemIcon>
        <Typography textAlign="center">
          <Link
            style={{ marginLeft: 0, textDecoration: "none", color: "inherit" }}
            to="/changelogs"
            rel="noreferrer"
          >
            {t("changelogs.navigationLabel")}
          </Link>
        </Typography>
      </MenuItem>
    </>
  );
};

export default ChangelogMenu;
