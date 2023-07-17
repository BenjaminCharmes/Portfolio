// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../../store/appStateStore";

// SCSS
import "./ButtonLight.scss";

const ButtonLight = (props) => {
  const appState = useAtomValue(appStateStore);

  return (
    <>
      <button
        className={`button-light ${appState.theme}`}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
};

export default ButtonLight;
