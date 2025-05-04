import useMediaQuery from "@mui/material/useMediaQuery";
import LaunchDesktop from "./LaunchDesktop";
import LaunchMobile from "./LaunchMobile";

const LaunchPage = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return isMobile ? <LaunchMobile /> : <LaunchDesktop />;
};

export default LaunchPage;
