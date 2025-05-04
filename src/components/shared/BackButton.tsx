import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';
import { PageHeading } from './Typography';

const BackButton = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      sx={{
        color: 'white',
        '&:hover': { textDecoration: 'underline' },
        '& .MuiButton-startIcon>*:nth-of-type(1)': {
          fontSize: '30px',
          paddingBottom: '2px',
        },
      }}
      startIcon={<KeyboardArrowLeftIcon />}
    >
      <PageHeading>{children}</PageHeading>
    </Button>
  );
};

export default BackButton;
