import { Box, MenuItem } from "@mui/material";
import { ModalType } from "hooks/useLogModalState";
import { useTranslation } from "react-i18next";

interface CardMenuItemsProps {
  handleModalStatus: (modalType: ModalType) => void;
}

const CardMenuItems = ({ handleModalStatus }: CardMenuItemsProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ px: 1, textAlign: "center" }}>
      <MenuItem onClick={() => handleModalStatus("comment")}>
        {t("logCard.logButtons.addComment")}
      </MenuItem>
      <MenuItem onClick={() => handleModalStatus("change")}>
        {t("logCard.logButtons.changeLogStatus")}
      </MenuItem>
      <MenuItem onClick={() => handleModalStatus("complete")}>
        {t("logCard.logButtons.completeLog")}
      </MenuItem>
    </Box>
  );
};

export default CardMenuItems;
