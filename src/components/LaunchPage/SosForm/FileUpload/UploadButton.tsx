import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { SettersType } from "types/SosTypes";

interface UploadButtonProps {
  setFormState: SettersType["setFormState"];
}

const UploadButton = ({ setFormState }: UploadButtonProps) => {
  const { t } = useTranslation();

  const handleFileChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...Array.from(target.files ?? [])],
    }));
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      {t("sosForm.uploadBtn")}
      <VisuallyHiddenInput
        type="file"
        key={Date.now()}
        accept="image/*"
        onChange={(e) => handleFileChange(e)}
        multiple
      />
    </Button>
  );
};

export default UploadButton;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
