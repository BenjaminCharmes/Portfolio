// React router
import { Link } from "react-router-dom";

// SCSS
import "./CustomLink.scss";

const CustomLink = (props) => {
  return (
    <>
      <Link className='custom-link' to={`/${props.link}`}>
        {props.text}
      </Link>
    </>
  );
};

export default CustomLink;
