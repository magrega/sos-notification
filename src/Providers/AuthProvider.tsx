import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { CodeType } from "types/SosTypes";

type auth = {
  username?: string;
  accessToken?: string;
  codeType?: CodeType;
};

interface StateContextType {
  auth: auth | undefined;
  setAuth: Dispatch<SetStateAction<auth | undefined>>;
  setSpreadAuth: (data: auth | undefined) => void;
}

const AuthContext = createContext<StateContextType>({} as StateContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<auth | undefined>(undefined);

  const setSpreadAuth = (data: auth | undefined) => {
    setAuth((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, setSpreadAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
