import EditNoteIcon from '@mui/icons-material/EditNote';
import { IconButton, IconButtonProps, Tooltip } from '@mui/material';

const EditCardButton = (props: IconButtonProps) => {
  return (
    <Tooltip title="Edit log">
      <IconButton sx={{ position: 'absolute', right: 5 }} {...props}>
        <EditNoteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default EditCardButton;
