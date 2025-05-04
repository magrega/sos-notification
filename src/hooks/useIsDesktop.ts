import { useEffect, useState } from "react";

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth > 900 ? setIsDesktop(true) : setIsDesktop(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsDesktop]);

  return isDesktop;
};
