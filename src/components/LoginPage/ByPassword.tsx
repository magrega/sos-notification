import { useLoginByPasswordMutation } from "hooks/QueryHooks/useAuthQuery";
import useAuth from "hooks/useAuth";
import { useVisualError } from "hooks/useError";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import PasswordInput from "./PasswordInput";
import ExpandableWrapper from "./UI/ExpandableWrapper";
import LoginButton from "./UI/LoginButton";

interface ByPasswordProps {
  login: string;
}

const ByPassword = ({ login }: ByPasswordProps) => {
  const navigate = useNavigate();

  const { mutateAsync: PWLoginMutation, isPending } =
    useLoginByPasswordMutation();

  const { setSpreadAuth } = useAuth();
  const { isErrorVisual, handleError } = useVisualError();

  const [password, setPassword] = useState("");

  const handlePassword = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setPassword(target.value);

  const handlePasswordLogin = async () => {
    try {
      const data = await PWLoginMutation({ login, password });
      setSpreadAuth({
        accessToken: data.accessToken,
      });
      localStorage.setItem("isLogged", "true");
      navigate("/", { replace: true });
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <ExpandableWrapper>
        <PasswordInput
          value={password}
          onChange={handlePassword}
          error={isErrorVisual}
          onKeyDown={(e) => e.key === "Enter" && handlePasswordLogin()}
        />
      </ExpandableWrapper>
      <LoginButton
        tabIndex={4}
        onClick={handlePasswordLogin}
        loading={isPending}
      />
    </>
  );
};

export default ByPassword;
