import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Typography } from "@mui/material";
import { SettersType } from "types/SosTypes";

interface UploadedFilesProps {
  attachments: File[];
  setFormState: SettersType["setFormState"];
}

const UploadedFiles = ({ attachments, setFormState }: UploadedFilesProps) => {
  if (!attachments) return;

  const removeFile = (index: number) => {
    const data = [...attachments];
    data.splice(index, 1);
    setFormState((prev) => ({ ...prev, attachments: data }));
  };

  return [...attachments].map((file, index) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      key={index}
    >
      <Typography variant="body2">
        {file.name}, {(file.size / 1000000).toFixed(2)} mb
      </Typography>
      <IconButton aria-label="delete" onClick={() => removeFile(index)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  ));
};

export default UploadedFiles;
