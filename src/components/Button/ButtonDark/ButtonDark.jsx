// SCSS
import "./ButtonDark.scss";

const ButtonDark = (props) => {
  return (
    <>
      <button className='button-dark' onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
};

export default ButtonDark;
