import { Divider, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useGetUserQuery } from "hooks/QueryHooks/useAuthQuery";
import useAuth from "hooks/useAuth";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router";
import ChangelogMenu from "./ChangeLogMenu";
import CopyrightMenu from "./CopyrightMenu";
import LanguageMenu from "./LanguageMenu";
import LegalMenu from "./LegalMenu";
import LogoutMenu from "./LogoutMenu";

const UserMenu = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const { data } = useGetUserQuery();

  const handleLogOut = async () => {
    navigate("/login");
    setAuth(undefined);
    localStorage.removeItem("login");
    localStorage.removeItem("isLogged");
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleOpenUserMenu = (e: MouseEvent<HTMLElement>) =>
    setAnchorElUser(e.currentTarget);

  return (
    <Box sx={{ flexGrow: 0, paddingRight: { xs: 0, lg: "10px" } }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={data?.username} src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Box>
      <Menu
        id="appbar-usermenu"
        disableScrollLock
        disablePortal
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ mt: "45px", zIndex: 1 }}
      >
        <MenuItem
          sx={{
            padding: "18px 24px",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Avatar alt={data?.username} src="/static/images/avatar/2.jpg" />
          <Typography sx={{ mt: 1 }}>{data?.username}</Typography>
        </MenuItem>
        <Divider />
        <LanguageMenu closeMenu={handleCloseUserMenu} />
        <Divider sx={{ marginY: 1 }} />
        <LegalMenu closeMenu={handleCloseUserMenu} />
        <Divider />
        <ChangelogMenu closeMenu={handleCloseUserMenu} />
        <Divider />
        <LogoutMenu handleLogOut={handleLogOut} />
        <Divider />
        <CopyrightMenu />
      </Menu>
    </Box>
  );
};

export default UserMenu;
