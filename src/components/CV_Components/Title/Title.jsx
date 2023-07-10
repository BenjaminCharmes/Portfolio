// React router
import { Link } from "react-router-dom";

// SCSS
import "./Title.scss";

const Title = (props) => {
  return (
    <>
      <div className='title'>{props.text}</div>
    </>
  );
};

export default Title;
