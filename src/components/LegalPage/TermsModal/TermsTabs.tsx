import { Button, Grid2, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import LegalPageContent from "components/LegalPage/LegalPageContent";
import { a11yProps } from "helpers";
import { useLegalQuery } from "hooks/QueryHooks/useLegalQuery";
import { SyntheticEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import TabPanel from "./TabPanel";
import TabsGridContainer from "./TabsGridContainer";

interface TermsTabsProps {
  handleClose: () => void;
}

const TermsTabs = ({ handleClose }: TermsTabsProps) => {
  const { t } = useTranslation();
  const isModile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const { useAgreeToTerms } = useLegalQuery();
  const { mutateAsync: sendPrivacy, isPending } = useAgreeToTerms();

  const [tabNum, setTabNum] = useState(0);

  const handleChange = (_: SyntheticEvent, newTabNum: number) =>
    setTabNum(newTabNum);

  const sendAcceptPrivacy = async () => {
    await sendPrivacy();
    handleClose();
  };

  return (
    <TabsGridContainer>
      <Grid2
        size={{ xs: 12, md: 4 }}
        sx={{
          py: 2,
          pl: 2,
          backgroundColor: ({ palette }) => palette.inputBackgroundColor.main,
        }}
      >
        <Tabs
          orientation={isModile ? "horizontal" : "vertical"}
          variant="scrollable"
          selectionFollowsFocus={false}
          value={tabNum}
          onChange={handleChange}
          aria-label="Vertical terms tabs"
          sx={{
            borderRight: { md: 1 },
            borderColor: { md: "divider" },
            marginTop: 3,
            "& button": { p: { md: 0 } },
          }}
        >
          <Tab label={t("terms")} {...a11yProps(0)} />
          <Tab label={t("privacy")} {...a11yProps(1)} />
        </Tabs>
      </Grid2>
      <Grid2
        tabIndex={-1}
        size={{ xs: 12, md: 10 }}
        sx={{
          height: "100%",
          overflowY: "auto",
          p: 2,
        }}
      >
        <Typography>{t("termsModal.pleaseAccept")}</Typography>
        <TabPanel value={tabNum} index={0}>
          <LegalPageContent page="terms" />
        </TabPanel>
        <TabPanel value={tabNum} index={1}>
          <LegalPageContent page="privacy" />
        </TabPanel>
        <Box sx={{ textAlign: "right" }}>
          <Button
            disabled={isPending}
            onClick={sendAcceptPrivacy}
            variant="contained"
          >
            {t("accept")}
          </Button>
        </Box>
      </Grid2>
    </TabsGridContainer>
  );
};

export default TermsTabs;
