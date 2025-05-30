import AppBar from "@mui/material/AppBar";
import Announcement from "components/shared/Announcement/Announcement";
import { PropsWithChildren } from "react";
import NavMenu from "./Navbar/NavMenu";
import UserMenu from "./UserMenu";

const AppHeader = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          zIndex: 1,
          px: 2,
          height: "64px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <NavMenu />
        <UserMenu />
      </AppBar>
      <Announcement />
      {children}
    </>
  );
};
export default AppHeader;
