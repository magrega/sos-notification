import { styled } from "@mui/material";
import { NavLink, NavLinkProps } from "react-router";

const NavLinkStyled = styled((props: NavLinkProps) => {
  return <NavLink {...props} end={props.to === "/"} />;
})(({ theme }) => ({
  textDecoration: "none",
  margin: "0 16px",
  color: "#00374d",
  fontSize: "16px",
  fontWeight: "500",
  display: "block",
  "&.active": {
    color: theme.palette.primary.main,
    boxShadow: `0 5px 2px -2px ${theme.palette.primary.main}`,
  },
}));

export default NavLinkStyled;
