// React router dom
import { Link } from "react-router-dom";

const NavbarLink = ({ path, content, activeLink }) => {
  return (
    <li>
      <Link to={path} className={activeLink === path ? "active" : "inactive"}>
        {content}
      </Link>
    </li>
  );
};

export default NavbarLink;
