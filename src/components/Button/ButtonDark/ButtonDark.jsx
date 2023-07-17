// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../../store/appStateStore";

// SCSS
import "./ButtonDark.scss";

const ButtonDark = (props) => {
  const appState = useAtomValue(appStateStore);

  return (
    <>
      <button
        className={`button-dark ${appState.theme}`}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
};

export default ButtonDark;
