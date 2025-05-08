import { Box, Modal, Typography } from "@mui/material";
import { useEditLogMutation } from "hooks/QueryHooks/useLogsQuery";
import useSnackbar from "hooks/useSnackbar";
import { MouseEvent, MouseEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";
import { ILog } from "types/FetchInterfaces";
import { LogStatusesType } from "types/SosTypes";
import CommentArea from "../CommentArea";
import CardButtonWithTooltip from "../UI/CardButtonWithTooltip";
import Label from "../UI/Label";
import LogStatusButtons from "./LogStatusButtons";

interface SosModalProps {
  open: boolean;
  onClose: () => void;
  modalType: string;
  log: ILog;
  closeMenu: () => void;
}

const SosModal = ({
  open,
  onClose,
  modalType,
  log,
  closeMenu,
}: SosModalProps) => {
  const { t } = useTranslation();
  const { mutateAsync: editLog, isPending } = useEditLogMutation();
  const { handleSnackbar } = useSnackbar();

  const [comment, setComment] = useState("");
  const [logStatus, setLogStatus] = useState(log.status);

  if (!open && comment !== "") setComment("");
  if (!open && logStatus !== log.status) setLogStatus(log.status);

  const handleChange = (
    _: MouseEvent<HTMLElement>,
    newStatus: LogStatusesType
  ) => setLogStatus(newStatus);

  const sendEditLog = async (payload: {
    comment?: string;
    status?: string;
  }) => {
    try {
      await editLog({ logId: log.id, ...payload });
      onClose();
      handleSnackbar(t("sosForm.updateSuccess"));
      if (closeMenu) closeMenu();
    } catch (error) {
      onClose();
      handleSnackbar(`${t("error.loadingData")}: ${error}`, true);
    }
  };

  const handleSubmit = () => {
    if (modalType === "comment") sendEditLog({ comment });
    if (modalType === "change") sendEditLog({ comment, status: logStatus });
    if (modalType === "complete") sendEditLog({ comment, status: "Решено" });
  };

  const checkSubmitDisabled = () => {
    if (modalType === "comment") return !comment;
    if (modalType === "change") return logStatus === log.status || !logStatus;
    if (modalType === "complete") return false;
  };

  return (
    <>
      <Modal open={open} onClose={onClose} aria-labelledby="modal-log-menu">
        <Box sx={style}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            LOG ID: {log.id}
          </Typography>
          {modalType === "change" && (
            <LogStatusButtons
              logStatus={logStatus}
              handleChange={handleChange}
            />
          )}
          <Label label={t("sosForm.commentRequired")} />
          <CommentArea comment={comment} setComment={setComment} />
          <Box sx={{ display: "flex", gap: 1 }}>
            <CardButtonWithTooltip
              disabled={checkSubmitDisabled()}
              loading={isPending}
              onClick={handleSubmit}
            >
              {t("submit")}
            </CardButtonWithTooltip>
            <CardButtonWithTooltip
              variant="outlined"
              onClick={onClose as MouseEventHandler<HTMLButtonElement>}
            >
              {t("close")}
            </CardButtonWithTooltip>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default SosModal;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  width: "95%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "4px",
  p: 2,
};
