// Jotai
import { useAtomValue } from "jotai";

// Store
import appStateAtom from "../../store/appStateStore";

// Components
import NavbarLink from "./NavbarLink";

// SCSS
import "./NavbarLinks.scss"


const NavbarLinks = () => {

  const appState = useAtomValue(appStateAtom);
  
  return (
    <ul>
      { appState.language === 'english' ? (
        <>
          <NavbarLink path='/' content='Home' />
          <NavbarLink path='/projects' content='Project' />
          <NavbarLink path='/about' content='About' />
        </>
      ) : (
        <>
          <NavbarLink path='/' content='Accueil' />
          <NavbarLink path='/projects' content='Projet' />
          <NavbarLink path='/about' content='À propos' />
        </>
      )}
    </ul>
  );
};

export default NavbarLinks;
