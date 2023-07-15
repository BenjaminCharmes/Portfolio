// SCSS
import "./ButtonLight.scss";

const ButtonLight = (props) => {
  return (
    <>
      <button className='button-light' onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
};

export default ButtonLight;
