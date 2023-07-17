// React
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Jotai
import { useAtomValue } from "jotai";
import appStateAtom from "../../store/appStateStore";

// Components
import NavbarLink from "./NavbarLink";

// SCSS
import "./NavbarLinks.scss";

const NavbarLinks = () => {
  const appState = useAtomValue(appStateAtom);
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location]);

  return (
    <ul className='navbar-all-link'>
      {appState.language === "english" ? (
        <>
          <NavbarLink
            className='link'
            path='/'
            content='About me'
            activeLink={currentUrl}
          />
          <NavbarLink
            className='link'
            path='/cv'
            content='CV'
            activeLink={currentUrl}
          />
          <NavbarLink
            className='link'
            path='/projects'
            content='Projects'
            activeLink={currentUrl}
          />
          <NavbarLink
            className='link'
            path='/contact'
            content='Contact'
            activeLink={currentUrl}
          />
        </>
      ) : (
        <>
          <NavbarLink
            className='link'
            path='/'
            content='À propos de moi'
            activeLink={currentUrl}
          />
          <NavbarLink
            className='link'
            path='/cv'
            content='CV'
            activeLink={currentUrl}
          />
          <NavbarLink
            className='link'
            path='/projects'
            content='Projets'
            activeLink={currentUrl}
          />
          <NavbarLink
            className='link'
            path='/contact'
            content='Contact'
            activeLink={currentUrl}
          />
        </>
      )}
    </ul>
  );
};

export default NavbarLinks;
