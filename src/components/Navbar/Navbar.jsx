// Hooks
import { useAtom } from "jotai";
import { useEffect } from "react";

// Store
import appStateStore from "../../store/appStateStore";

// Components
import NavbarLinks from "./NavbarLinks";
import NavbarTitle from "./NavbarTitle";
import SwitchButton from "../SwitchButton/SwitchButton";

// SCSS
import "./Navbar.scss";

const Navbar = () => {
  const [appState, setAppState] = useAtom(appStateStore);

  function toggleTheme() {
    setAppState((prevState) => ({
      ...prevState,
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  }

  function toggleLanguage() {
    setAppState((prevState) => ({
      ...prevState,
      language: prevState.language === "english" ? "french" : "english",
    }));
  }

  useEffect(() => {
    localStorage.setItem("theme", appState.theme);
    localStorage.setItem("language", appState.language);
    const app = document.querySelector("body > div > div");
    app.classList = `app ${appState.theme}`;
  }, [appState]);

  return (
    <div className='navbar'>
      <NavbarTitle />
      <NavbarLinks />
      {/* <div className='switch'>
        <SwitchButton
          state={appState.theme === "light" ? true : false}
          mode='theme'
          iconOn='☀️'
          iconOff='🌛'
          handleSwitchButton={toggleTheme}
        />
        <SwitchButton
          state={appState.language === "english" ? true : false}
          mode='language'
          iconOn='🇬🇧'
          iconOff='🇫🇷'
          handleSwitchButton={toggleLanguage}
        />
      </div> */}
    </div>
  );
};

export default Navbar;
