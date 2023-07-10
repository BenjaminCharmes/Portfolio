// Jotai
import { useAtomValue } from "jotai";

// Store
import appStateAtom from "../../store/appStateStore";

// Components
import NavbarLink from "./NavbarLink";

// SCSS
import "./NavbarLinks.scss";

const NavbarLinks = () => {
  const appState = useAtomValue(appStateAtom);

  return (
    <ul>
      {appState.language === "english" ? (
        <>
          <NavbarLink path='/' content='About me' />
          <NavbarLink path='/cv' content='CV' />
          <NavbarLink path='/projects' content='Projects' />
          <NavbarLink path='/contact' content='Contact' />
        </>
      ) : (
        <>
          <NavbarLink path='/' content='À propos de moi' />
          <NavbarLink path='/cv' content='CV' />
          <NavbarLink path='/projects' content='Projets' />
          <NavbarLink path='/contact' content='Contact' />
        </>
      )}
    </ul>
  );
};

export default NavbarLinks;
