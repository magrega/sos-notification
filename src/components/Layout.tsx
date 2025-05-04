import { Outlet } from "react-router";
import TermsModal from "./LegalPage/TermsModal/TermsModal";
import AppHeader from "./shared/AppHeader/AppHeader";

const Layout = () => {
  return (
    <TermsModal>
      <AppHeader>
        <Outlet />
      </AppHeader>
    </TermsModal>
  );
};

export default Layout;
