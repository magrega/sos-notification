import { Paper, Typography } from '@mui/material';
import Loader from 'components/shared/Loader/Loader';
import { useSosQuery } from 'hooks/QueryHooks/Logs';
import { useTranslation } from 'react-i18next';
import SosForm from './SosForm';

const SosFormWrapper = () => {
  const { data: sosFormData, isLoading } = useSosQuery();
  const { t } = useTranslation();

  if (sosFormData) {
    if (!Object.values(sosFormData).some((country) => country.length))
      return (
        <Paper sx={{ p: 1, m: 1, textAlign: 'center' }}>
          <Typography>{t('sosForm.noNotifications')}</Typography>
        </Paper>
      );

    return <SosForm sosFormData={sosFormData} isLoading={isLoading} />;
  }

  return <Loader />;
};

export default SosFormWrapper;
