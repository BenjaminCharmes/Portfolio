// React router
import { Link } from "react-router-dom";

// SCSS
import "./CVTitle.scss";

const CVTitle = (props) => {
  return (
    <>
      <div className='CVTitle'>{props.text}</div>
    </>
  );
};

export default CVTitle;
