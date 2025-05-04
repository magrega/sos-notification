import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import { Box } from "@mui/material";
import { ModalType } from "hooks/useLogModalState";
import { t } from "i18next";
import CardButtonWithTooltip from "../UI/CardButtonWithTooltip";

interface LogButtonsProps {
  handleModalStatus: (modalType: ModalType) => void;
}

const LogButtons = ({ handleModalStatus }: LogButtonsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 0.2,
        height: "100%",
      }}
    >
      <CardButtonWithTooltip
        tooltipText={t("logCard.logButtons.addCommentTooltip")}
        onClick={() => handleModalStatus("comment")}
        sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
      >
        <InsertCommentIcon />
      </CardButtonWithTooltip>
      <CardButtonWithTooltip
        tooltipText={t("logCard.logButtons.changeLogTooltip")}
        onClick={() => handleModalStatus("change")}
        sx={{ borderRadius: 0 }}
      >
        <ChangeCircleIcon />
      </CardButtonWithTooltip>
      <CardButtonWithTooltip
        tooltipText={t("logCard.logButtons.completeLogTooltip")}
        onClick={() => handleModalStatus("complete")}
        sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
      >
        <CheckCircleIcon />
      </CardButtonWithTooltip>
    </Box>
  );
};

export default LogButtons;
