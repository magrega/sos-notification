import SosSnackbar from "components/shared/SosSnackbar";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface SnackBarContextType {
  isSnackbarOpen: boolean;
  setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string>>;
  handleSnackbar: (msg: string, isError?: boolean) => void;
}

const SnackbarContext = createContext<SnackBarContextType>(
  {} as SnackBarContextType
);

export const SnackbarProvider = ({ children }: PropsWithChildren) => {
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setError] = useState(false);

  const handleSnackbar = (msg: string, isError: boolean = false) => {
    setSnackbarOpen(true);
    setMessage(msg);
    setError(isError);
    console.log(msg);
  };

  return (
    <SnackbarContext.Provider
      value={{ isSnackbarOpen, setSnackbarOpen, setMessage, handleSnackbar }}
    >
      {children}
      <SosSnackbar
        isSnackbarOpen={isSnackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        message={message}
        isError={isError}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
