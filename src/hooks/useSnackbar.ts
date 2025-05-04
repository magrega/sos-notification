import SnackbarContext from 'Providers/SnackbarProvider';
import { useContext } from 'react';

const useSnackbar = () => useContext(SnackbarContext);

export default useSnackbar;
