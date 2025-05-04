import { Box } from '@mui/material';
import { HCLogo } from 'assets/images';

const LogoImage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 5,
      }}
    >
      <Box sx={{ width: '200px' }}>
        <img src={HCLogo} alt="branding logo" />
      </Box>
    </Box>
  );
};

export default LogoImage;
