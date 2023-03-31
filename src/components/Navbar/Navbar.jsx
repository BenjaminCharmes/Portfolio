// Hooks
import { useAtom } from 'jotai';
import { useEffect } from 'react';

// Store
import appStateStore from '../../store/appStateStore';

// antd
import { Switch, Space } from 'antd';

// Components
import NavbarLinks from "./NavbarLinks"
import NavbarTitle from "./NavbarTitle"

// SCSS
import "./Navbar.scss"

const Navbar = () => {

  const [appState, setAppState] = useAtom(appStateStore);

  function toggleTheme() {
    setAppState(prevState => ({
      ...prevState,
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  }

  function toggleLanguage() {
    setAppState(prevState => ({
      ...prevState,
      language: prevState.language === 'english' ? 'french' : 'english',
    }));
  }

  useEffect(() => {
    localStorage.setItem('theme', appState.theme);
    localStorage.setItem('language', appState.language);
    const app = document.querySelector('body > div > div');
    app.classList = (`app ${appState.theme}`);
  }, [appState]);

  return (
    <div className='navbar'>
      <NavbarTitle />
      <NavbarLinks />
      <div className='switch'>
        <Space direction="vertical">
          <Switch
            checked={appState.theme === 'light'}
            checkedChildren="☀️"
            unCheckedChildren="🌛"
            onChange={toggleTheme}
          />
        </Space>
        <Space direction="vertical">
          <Switch
            checked={appState.language === 'english'}
            checkedChildren="🇬🇧"
            unCheckedChildren="🇫🇷"
            onChange={toggleLanguage}
          />
        </Space>
      </div>
    </div>
  )
}

export default Navbar;