import { ListItemIcon } from '@mui/material';
import { flags } from 'assets/lang/langFlags';

interface LanguageFlagProps {
  language: keyof typeof flags;
}

const LanguageFlag = ({ language }: LanguageFlagProps) => {
  return (
    <ListItemIcon sx={{ width: '15%' }}>
      <img src={flags[language]} alt="language flag" style={{ width: '60%', height: 'auto' }} />
    </ListItemIcon>
  );
};

export default LanguageFlag;
