// Hooks
import { useState } from "react";

// SCSS
import "./SwitchButton.scss";

const SwitchButton = ({
  state,
  mode,
  srcOn,
  srcOff,
  textOn,
  textOff,
  handleSwitchButton,
}) => {
  const [isActive, setIsActive] = useState(state);

  const handleSwitch = () => {
    setIsActive(!isActive);
    handleSwitchButton();
  };

  return (
    <div
      className={`switch-button ${isActive ? "on" : "off"} ${mode}`}
      onClick={handleSwitch}
    >
      {srcOn ? (
        <img className='icon' src={srcOn} />
      ) : (
        <p className='text'>{textOn}</p>
      )}
      <div className='knob'></div>
      {srcOff ? (
        <img className='icon' src={srcOff} />
      ) : (
        <p className='text'>{textOff}</p>
      )}
    </div>
  );
};

export default SwitchButton;
