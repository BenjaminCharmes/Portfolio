// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../store/appStateStore";

// SCSS
import "./H1Title.scss";

const H1Title = (props) => {
  const appState = useAtomValue(appStateStore);

  return <h1 className={`h1-title ${appState.theme}`}>{props.title}</h1>;
};

export default H1Title;
