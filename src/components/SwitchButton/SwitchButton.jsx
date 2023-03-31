// Hooks
import { useState } from 'react';

// SCSS
import './SwitchButton.scss';

const SwitchButton = ({ state, mode, iconOn, iconOff, handleSwitchButton }) => {

  const [isActive, setIsActive] = useState(state);

  const handleSwitch = () => {
    setIsActive(!isActive);
    handleSwitchButton();
  };

  return (
    <div className={`switch-button ${isActive ? 'on' : 'off'} ${mode}`} onClick={handleSwitch}>
      {iconOn}
      <div className="knob"></div>
      {iconOff}
    </div>
  );
};

export default SwitchButton;
