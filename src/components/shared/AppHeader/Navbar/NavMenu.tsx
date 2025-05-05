import NavBurger from "./NavBurger";
import NavLinks from "./NavLinks";

const pages = [
  { pageName: "sosForm.navigationLabel", pageLink: "/" },
  { pageName: "changelogs.navigationLabel", pageLink: "/changelogs" },
];

const NavMenu = () => {
  return (
    <>
      <NavBurger pages={pages} />
      <NavLinks pages={pages} />
    </>
  );
};

export default NavMenu;
