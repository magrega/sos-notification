import AuthContext from 'Providers/AuthProvider';
import { useContext } from 'react';

const useAuth = () => useContext(AuthContext);

export default useAuth;
