// React
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location]);

  return (
    <ul>
      {appState.language === "english" ? (
        <>
          <NavbarLink path='/' content='About me' activeLink={currentUrl} />
          <NavbarLink path='/cv' content='CV' activeLink={currentUrl} />
          <NavbarLink
            path='/projects'
            content='Projects'
            activeLink={currentUrl}
          />
          <NavbarLink
            path='/contact'
            content='Contact'
            activeLink={currentUrl}
          />
        </>
      ) : (
        <>
          <NavbarLink
            path='/'
            content='À propos de moi'
            activeLink={currentUrl}
          />
          <NavbarLink path='/cv' content='CV' activeLink={currentUrl} />
          <NavbarLink
            path='/projects'
            content='Projets'
            activeLink={currentUrl}
          />
          <NavbarLink
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
