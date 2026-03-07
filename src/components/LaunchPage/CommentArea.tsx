import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

interface CommentAreaProps {
  comment: string;
  onCommentChange: (value: string) => void;
}

const CommentArea = ({ comment, onCommentChange }: CommentAreaProps) => (
  <FormControl fullWidth sx={{ mb: 2 }}>
    <TextField
      multiline
      fullWidth
      maxRows={5}
      name="comment"
      value={comment}
      onChange={(e) => onCommentChange(e.target.value)}
    />
  </FormControl>
);

export default CommentArea;
