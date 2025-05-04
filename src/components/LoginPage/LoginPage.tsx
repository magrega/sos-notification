import { Box, Paper } from "@mui/material";
import useAuth from "hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Footer from "./Footer";
import LanguageButtons from "./LanguageButtons";
import Login from "./Login";

const LoginPage = () => {
  const navigate = useNavigate();

  const { auth } = useAuth();

  useEffect(() => {
    if (auth?.accessToken) navigate("/", { replace: true });
  }, [auth, navigate]);

  return (
    <Box sx={boxStyles}>
      <Paper component="main" sx={paperStyles}>
        <LanguageButtons />
        <Login />
      </Paper>
      <Footer />
    </Box>
  );
};

export default LoginPage;

const boxStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  flexDirection: "column",
};

const paperStyles = {
  padding: { xs: 3, sm: 6 },
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  minHeight: "550px",
  maxWidth: { xs: "600px", sm: "450px" },
  width: "100%",
  margin: "auto 0",
  flex: { xs: 1, sm: 0 },
};
