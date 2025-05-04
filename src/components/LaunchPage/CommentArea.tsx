import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';

interface CommentAreaProps {
  comment: string;
  setComment: (comment: string) => void;
}

const CommentArea = ({ comment, setComment }: CommentAreaProps) => (
  <FormControl fullWidth sx={{ mb: 2 }}>
    <TextField
      multiline
      fullWidth
      maxRows={5}
      name="comment"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />
  </FormControl>
);

export default CommentArea;
