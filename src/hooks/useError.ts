import { useEffect, useState } from "react";
import useSnackbar from "./useSnackbar";

export const useVisualError = () => {
  const { handleSnackbar } = useSnackbar();
  const [isErrorVisual, setErrorVisual] = useState(false);

  const handleError = (error: unknown) => {
    setErrorVisual(true);
    handleSnackbar(String(error), true);
  };

  useEffect(() => {
    const errorTimeOut = setTimeout(() => {
      setErrorVisual(false);
    }, 6000);

    return () => {
      clearTimeout(errorTimeOut);
    };
  }, [isErrorVisual]);

  return { isErrorVisual, handleError } as const;
};
