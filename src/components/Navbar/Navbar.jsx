// Hooks
import { useAtom } from "jotai";
import { useEffect } from "react";

// Jotai
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
    <div className={`navbar ${appState.theme}`}>
      <NavbarTitle />
      <NavbarLinks />
      <div className='switch'>
        <SwitchButton
          state={appState.theme === "light" ? true : false}
          mode='theme'
          srcOn='src/assets/Images/sun.png'
          srcOff='src/assets/Images/moon.png'
          handleSwitchButton={toggleTheme}
        />
        <SwitchButton
          state={appState.language === "english" ? true : false}
          mode='language'
          textOn='En'
          textOff='Fr'
          handleSwitchButton={toggleLanguage}
        />
      </div>
    </div>
  );
};

export default Navbar;
