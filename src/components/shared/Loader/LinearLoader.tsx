import { Box, CircularProgress } from '@mui/material';

const LinearLoader = () => {
  return (
    <Box sx={{ m: 5, textAlign: 'center' }}>
      <CircularProgress />
    </Box>
  );
};

export default LinearLoader;
