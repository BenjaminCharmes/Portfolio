// React router dom
import { Link } from 'react-router-dom';

// React icons
import { RiLinkedinLine, RiGithubLine, RiTwitterLine } from "react-icons/ri";

// SCSS
import "./FooterIcons.scss";

const FooterIcons = () => {

  return (
    <div className="icons">
      <div className="circle circle-linkedin">
        <Link to="https://www.linkedin.com/in/benjamin-charmes/">
          <RiLinkedinLine className='icon'/>
        </Link>
      </div>
      <div className="circle circle-github">
        <Link to="https://github.com/BenjaminCharmes">
          <RiGithubLine className='icon' />
        </Link>
      </div>
      <div className="circle circle-twitter">
        <Link to="https://twitter.com/BenjaminCharmes">
          <RiTwitterLine className='icon' />
        </Link>
      </div>
    </div>
  );
};

export default FooterIcons;
