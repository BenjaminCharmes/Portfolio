// React router dom
import { Link } from "react-router-dom";

// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../store/appStateStore";

const NavbarLink = ({ path, content, activeLink }) => {
  const appState = useAtomValue(appStateStore);

  return (
    <li>
      <Link
        to={path}
        className={`${activeLink === path ? "active" : "inactive"} ${
          appState.theme
        }`}
      >
        {content}
      </Link>
    </li>
  );
};

export default NavbarLink;
