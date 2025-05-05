import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import NavLinkStyled from "components/shared/NavLinkStyled";
import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { LinkPagesType } from "./pages.type";

interface NavBurgerProps {
  pages: LinkPagesType[];
}

const NavBurger = ({ pages }: NavBurgerProps) => {
  const { t } = useTranslation();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (e: MouseEvent<HTMLElement>) =>
    setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="burger button"
        aria-controls="menu-navigation"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{ boxSizing: "content-box" }}
      >
        <MenuIcon
          fontSize="small"
          sx={{
            color: "black",
            borderRadius: "100%",
            padding: "10px",
            boxShadow: "-2px 0px 8px rgba(0, 0, 0, 0.2)",
            fill: "#00374D",
          }}
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        keepMounted
        disableScrollLock
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => {
          return (
            <NavLinkStyled key={page.pageLink} to={page.pageLink}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color={"#00374d"} textAlign="center">
                  {t(page.pageName)}
                </Typography>
              </MenuItem>
            </NavLinkStyled>
          );
        })}
      </Menu>
    </Box>
  );
};

export default NavBurger;
