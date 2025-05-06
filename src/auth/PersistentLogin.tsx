import Loader from "components/shared/Loader/Loader";
import { refreshToken } from "hooks/QueryHooks/useAuthQuery";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setAuth } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        const login = localStorage.getItem("login");
        const isLogged = localStorage.getItem("isLogged");
        if (!login || !isLogged) return setIsLoading(false);

        const newAccessToken = await refreshToken(login);
        setAuth({
          accessToken: newAccessToken.accessToken,
          username: newAccessToken.username,
        });
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    verifyRefreshToken();

    return () => {
      isMounted = false;
    };
  }, [setAuth]);

  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
