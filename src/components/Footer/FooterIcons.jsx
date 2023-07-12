// React router dom
import { Link } from "react-router-dom";

// React icons
import { RiLinkedinLine, RiGithubLine, RiTwitterLine } from "react-icons/ri";

// SCSS
import "./FooterIcons.scss";

const FooterIcons = () => {
  return (
    <div className='icons'>
      <div className='circle circle-linkedin'>
        <Link
          to='https://www.linkedin.com/in/benjamin-charmes/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <RiLinkedinLine className='icon' />
        </Link>
      </div>
      <div className='circle circle-github'>
        <Link
          to='https://github.com/BenjaminCharmes'
          target='_blank'
          rel='noopener noreferrer'
        >
          <RiGithubLine className='icon' />
        </Link>
      </div>
      <div className='circle circle-twitter'>
        <Link
          to='https://twitter.com/BenjaminCharmes'
          target='_blank'
          rel='noopener noreferrer'
        >
          <RiTwitterLine className='icon' />
        </Link>
      </div>
    </div>
  );
};

export default FooterIcons;
