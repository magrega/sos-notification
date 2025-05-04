import Loader from "components/shared/Loader/Loader";
import { RefreshToken } from "hooks/QueryHooks/Auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        const login = localStorage.getItem("login");
        if (!login) return;
        const newAccessToken = await RefreshToken(login);
        setAuth({
          accessToken: newAccessToken.accessToken,
          username: newAccessToken.user.username,
        });
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    !auth ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
