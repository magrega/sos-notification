import { Button, ButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SelectScreenButtonsType } from "types/SosTypes";
import LogSticker from "../LogSticker";

interface SelectScreenButtonProps {
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
      fullWidth
      aria-label="sos and logs switch"
      sx={buttonGroupStyles}
    >
      {buttons.map(({ value, translationKey, hasSticker }) => (
        <Button
          key={value}
          variant={isActiveButton(value)}
          onClick={() => handleTabChange(value)}
        >
          {t(translationKey)}
          {hasSticker && <LogSticker />}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default SelectScreenButtons;

interface ButtonConfig {
  value: SelectScreenButtonsType;
  translationKey: string;
  hasSticker?: boolean;
}

const buttons: ButtonConfig[] = [
  { value: "SOS", translationKey: "selectScreenButtons.sos" },
  {
    value: "Logs",
    translationKey: "selectScreenButtons.logs",
    hasSticker: true,
  },
];

const buttonGroupStyles = {
  display: { md: "none" },
  p: 2,
  mb: 2,
  bgcolor: "white",
  borderRadius: 0,
};
