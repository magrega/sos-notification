import useAuth from 'hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router';

const RequireAuth = () => {
  const location = useLocation();
  const { auth } = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};
export default RequireAuth;
