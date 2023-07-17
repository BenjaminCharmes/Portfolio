// React router
import { Link } from "react-router-dom";

// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../store/appStateStore";

// SCSS
import "./CustomLink.scss";

const CustomLink = ({ link, text, newWindow }) => {
  const appState = useAtomValue(appStateStore);

  if (newWindow) {
    return (
      <>
        <a
          className={`custom-link ${appState.theme}`}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {text}
        </a>
      </>
    );
  }

  return (
    <>
      <Link className={`custom-link ${appState.theme}`} to={link}>
        {text}
      </Link>
    </>
  );
};

export default CustomLink;
