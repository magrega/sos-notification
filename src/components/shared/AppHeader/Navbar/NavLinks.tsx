import { Box } from "@mui/material";
import NavLinkStyled from "components/shared/NavLinkStyled";
import { LinkPagesType } from "./pages.type";
import { useTranslation } from "react-i18next";

interface NavLinksProps {
  pages: LinkPagesType[];
}

const NavLinks = ({ pages }: NavLinksProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => {
        return (
          <NavLinkStyled key={page.pageLink} to={page.pageLink}>
            {t(page.pageName)}
          </NavLinkStyled>
        );
      })}
    </Box>
  );
};

export default NavLinks;
