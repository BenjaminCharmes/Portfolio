// React router dom
import { Link } from 'react-router-dom';

const NavbarLink = ({ path, content }) => {
  return (
    <li>
      <Link to={path}>{content}</Link>
    </li>
  );
};

export default NavbarLink;
