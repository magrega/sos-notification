import Loader from "components/shared/Loader/Loader";
import { refreshToken } from "hooks/QueryHooks/useAuthQuery";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    let isMounted = true;
    console.log(123);

    const verifyRefreshToken = async () => {
      try {
        const login = localStorage.getItem("login");
        const isLogged = localStorage.getItem("isLogged");
        if (!login || !isLogged) return;
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
    if (!auth) verifyRefreshToken();
    if (auth) setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
