import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PersistLogin from "auth/PersistentLogin";
import RequireAuth from "auth/RequireAuth";
import ChangeLogsPage from "components/ChangeLogPage/ChangeLogPage";
import LaunchPage from "components/LaunchPage/LaunchPage";
import LegalPage from "components/LegalPage/LegalPage";
import NotFound from "components/NotFoundPage/NotFoundPage";
import { theme } from "localConstants";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage/LoginPage";
import "./utils/i18n";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/tos" element={<LegalPage page="terms" />} />
            <Route path="/privacy" element={<LegalPage page="privacy" />} />
            <Route path="/oss" element={<LegalPage page="oss" />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<LaunchPage />} />
                <Route path="/changelogs" element={<ChangeLogsPage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
