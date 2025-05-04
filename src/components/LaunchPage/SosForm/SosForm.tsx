import { Box, Paper } from "@mui/material";
import { useSendSos } from "hooks/QueryHooks/Logs";
import useAuth from "hooks/useAuth";
import { useCountdown } from "hooks/useCountdown";
import useSnackbar from "hooks/useSnackbar";
import { useSosForm } from "hooks/useSosForm";
import { SyntheticEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ILog } from "types/FetchInterfaces";
import { ISosForm } from "types/SosTypes";
import CommentArea from "../CommentArea";
import SosButton from "../SosButton";
import Label from "../UI/Label";
import FileUpload from "./FileUpload/FileUpload";
import SosFormSelects from "./SosFormSelects";

const SosForm = ({ sosFormData, isLoading }: ISosForm) => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);
  const { formState, setters, options, setComment } = useSosForm(sosFormData);
  const { plant, protocol, comment, attachments } = formState;
  const { auth } = useAuth();

  const { handleSnackbar } = useSnackbar();
  const { seconds, isCountdown, cancelCountdown, startCountdown } =
    useCountdown();
  const { mutateAsync: sendSos, isPending } = useSendSos();

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (isCountdown) return cancelCountdown();

    const sos: ILog = {
      id: 0, //json-server handles id assignment
      protocol: protocol.protocol_name,
      plant: plant.plant_name,
      pc_name: auth?.username,
      time_create: new Date().toISOString(),
      status: "Ожидание",
      comment,
    };

    const sendSosMsg = () =>
      sendSos(sos)
        .then(() => {
          setters.setFormState((prev) => ({
            ...prev,
            attachments: [],
            comment: "",
          }));
          formRef.current?.reset();
          handleSnackbar(t("log.updateSuccess"));
        })
        .catch((err) => handleSnackbar("Error: " + err, true));

    startCountdown(sendSosMsg);
  };

  return (
    <>
      <form onSubmit={onSubmit} style={{ minWidth: "100%" }} ref={formRef}>
        <Paper sx={{ maxWidth: { md: "600px" }, margin: "0 auto", padding: 2 }}>
          <SosFormSelects
            isLoading={isLoading}
            formState={formState}
            options={options}
            setters={setters}
          />
          <Label label={t("sosForm.comment")} />
          <CommentArea comment={comment} setComment={setComment} />
          <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
            <FileUpload
              attachments={attachments}
              setFormState={setters.setFormState}
            />
            <SosButton loading={isPending}>
              {isCountdown
                ? t("sosForm.cancelSend", { seconds })
                : isPending
                ? t("sosForm.isSending")
                : t("sosForm.sosBtn")}
            </SosButton>
          </Box>
        </Paper>
      </form>
    </>
  );
};

export default SosForm;
