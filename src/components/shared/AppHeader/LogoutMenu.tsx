import LogoutIcon from '@mui/icons-material/Logout';
import { ListItemIcon, MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface LogoutMenuProps {
  handleLogOut: () => void;
}

const LogoutMenu = ({ handleLogOut }: LogoutMenuProps) => {
  const { t } = useTranslation();

  return (
    <MenuItem key="Logout" onClick={handleLogOut}>
      <ListItemIcon>
        <LogoutIcon fontSize="small" />
      </ListItemIcon>
      <Typography textAlign="center">{t('header.logOut')}</Typography>
    </MenuItem>
  );
};

export default LogoutMenu;
