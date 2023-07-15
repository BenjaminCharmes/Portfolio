// React router
import { Link } from "react-router-dom";

// SCSS
import "./CustomLink.scss";

const CustomLink = (props) => {
  const { link, text, newWindow } = props;

  if (newWindow) {
    return (
      <>
        <a
          className='custom-link'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {text}
        </a>
      </>
    );
  }

  return (
    <>
      <Link className='custom-link' to={link}>
        {text}
      </Link>
    </>
  );
};

export default CustomLink;
