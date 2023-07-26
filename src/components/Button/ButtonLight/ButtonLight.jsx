// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../../store/appStateStore";

// SCSS
import "./ButtonLight.scss";

const ButtonLight = ({ text, onClick }) => {
  const appState = useAtomValue(appStateStore);

  return (
    <>
      <button className={`button-light ${appState.theme}`} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default ButtonLight;
