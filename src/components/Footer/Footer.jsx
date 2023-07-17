// Components
import FooterTitle from "./FooterTitle";
import FooterIcons from "./FooterIcons";

// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../store/appStateStore";

// SCSS
import "./Footer.scss";

const Footer = () => {
  const appState = useAtomValue(appStateStore);

  return (
    <div className={`footer ${appState.theme}`}>
      <FooterTitle />
      <FooterIcons />
    </div>
  );
};

export default Footer;
