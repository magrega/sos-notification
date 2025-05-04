import { Button, ButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SelectScreenButtonsType } from "types/SosTypes";
import LogSticker from "../LogSticker";

export interface SelectScreenButtonProps {
  activeButton: SelectScreenButtonsType;
  setActiveButton: (value: SelectScreenButtonsType) => void;
}

const SelectScreenButtons = ({
  activeButton,
  setActiveButton,
}: SelectScreenButtonProps) => {
  const { t } = useTranslation();

  const handleTabChange = (tab: SelectScreenButtonsType) => {
    setActiveButton(tab);
    localStorage.setItem("mobileTab", tab);
  };

  const isActiveButton = (btnName: string) =>
    activeButton === btnName ? "contained" : "outlined";

  return (
    <ButtonGroup
      disableRipple
      aria-label="sos and logs switch"
      fullWidth
      sx={{
        display: { md: "none" },
        p: 2,
        mb: 2,
        bgcolor: "white",
        borderRadius: 0,
      }}
    >
      <Button
        variant={isActiveButton("SOS")}
        onClick={() => handleTabChange("SOS")}
      >
        {t("selectScreenButtons.sos")}
      </Button>
      <Button
        variant={isActiveButton("Logs")}
        onClick={() => handleTabChange("Logs")}
      >
        {t("selectScreenButtons.logs")}
        <LogSticker />
      </Button>
    </ButtonGroup>
  );
};

export default SelectScreenButtons;
