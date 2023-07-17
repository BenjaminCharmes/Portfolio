// Components
import AboutCard from "../../components/About_Components/AboutCard/AboutCard";

// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../store/appStateStore";

// SCSS
import "./About.scss";

const About = () => {
  const appState = useAtomValue(appStateStore);

  return (
    <div className={`about-container ${appState.theme}`}>
      <AboutCard />
    </div>
  );
};

export default About;
