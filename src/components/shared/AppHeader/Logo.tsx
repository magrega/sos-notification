import { Typography } from "@mui/material";

interface LogoProps {
  logo: string;
  mobileHide?: boolean;
}

const Logo = ({ logo, mobileHide = false }: LogoProps) => {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      sx={{
        mr: 2,
        display: { xs: mobileHide ? "none" : "flex", md: "flex" },
        flexGrow: { xs: 1, md: 0 },
        order: { xs: 0, md: -1 },
      }}
    >
      <img src={logo} alt="logo" height="24px" width="100%" />
    </Typography>
  );
};

export default Logo;
