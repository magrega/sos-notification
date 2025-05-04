import { Box } from "@mui/material";
import { useState } from "react";
import LogsList from "./LogsList";

import { SelectScreenButtonsType } from "types/SosTypes";
import SelectScreenButtons from "./SelectScreenButtons/SelectScreenButtons";
import SosFormWrapper from "./SosForm/SosFormWrapper";

const LaunchMobile = () => {
  const storedTab = localStorage.getItem(
    "mobileTab"
  ) as SelectScreenButtonsType;

  const [activeButton, setActiveButton] = useState<SelectScreenButtonsType>(
    storedTab || "SOS"
  );

  return (
    <Box sx={{ overflowY: "scroll" }}>
      <SelectScreenButtons
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {activeButton === "SOS" && <SosFormWrapper />}
      {activeButton === "Logs" && <LogsList />}
    </Box>
  );
};

export default LaunchMobile;
