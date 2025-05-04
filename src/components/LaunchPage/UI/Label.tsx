import { Typography } from '@mui/material';

const Label = ({ label }: { label: string }) => {
  return <Typography sx={{ color: 'gray', fontSize: '14px' }}>{label}</Typography>;
};

export default Label;
