import { Box, styled } from "@mui/material";
import { RefAttributes } from "react";
import { useTranslation } from "react-i18next";
import { Link, LinkProps } from "react-router";
import { copyright } from "../../localConstants";
import { CaptionHeading } from "../shared/Typography";

const StyledLoginFooterLink = styled(
  (props: LinkProps & RefAttributes<HTMLAnchorElement>) => <Link {...props} />
)(({ theme }) => ({
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: theme.palette.text.secondary,
  },
}));

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        boxSizing: "border-box",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        columnGap: 4,
        width: "100%",
        padding: 2,
        borderTop: "1px solid #628390",
        "&>*": { color: "white" },
        textAlign: "center",
      }}
    >
      <CaptionHeading>{copyright}</CaptionHeading>
      <Box sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <Box
          sx={{
            display: "flex",
            columnGap: 1,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <StyledLoginFooterLink to="/tos">
            <CaptionHeading>{t("legal.termsofuse")}</CaptionHeading>
          </StyledLoginFooterLink>
          <CaptionHeading sx={{ display: { xs: "none", sm: "block" } }}>
            |
          </CaptionHeading>
          <StyledLoginFooterLink to="/privacy">
            <CaptionHeading>{t("legal.privacy")}</CaptionHeading>
          </StyledLoginFooterLink>
        </Box>
        <StyledLoginFooterLink to="/oss">
          <CaptionHeading>
            {t("legal.openSourceSoftwareAttribution")}
          </CaptionHeading>
        </StyledLoginFooterLink>
      </Box>
    </Box>
  );
};

export default Footer;
