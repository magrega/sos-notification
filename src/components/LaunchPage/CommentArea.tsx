import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { SettersType } from "types/SosTypes";

interface CommentAreaProps {
  comment: string;
  setFormState: SettersType["setFormState"];
}

const CommentArea = ({ comment, setFormState }: CommentAreaProps) => (
  <FormControl fullWidth sx={{ mb: 2 }}>
    <TextField
      multiline
      fullWidth
      maxRows={5}
      name="comment"
      value={comment}
      onChange={(e) =>
        setFormState((prev) => ({ ...prev, comment: e.target.value }))
      }
    />
  </FormControl>
);

export default CommentArea;
