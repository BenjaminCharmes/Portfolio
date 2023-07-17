// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../../store/appStateStore";

// SCSS
import "./Skill.scss";

const Skill = (props) => {
  const appState = useAtomValue(appStateStore);

  return (
    <div className={`skill-icon ${appState.theme}`}>
      <img src={props.name} alt={`Icône de ${props.alt}`} />
    </div>
  );
};

export default Skill;
