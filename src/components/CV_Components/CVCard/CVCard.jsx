// React-router-dom
import { Link } from "react-router-dom";

// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../../store/appStateStore";

// Components
import Skill from "../Skill/Skill";
import CustomLink from "../../Link/CustomLink";

// SCSS
import "./CVCard.scss";

const CVCard = (props) => {
  const appState = useAtomValue(appStateStore);

  return (
    <div className={`cv-card-container ${appState.theme}`}>
      <div className='left'>
        <div className='date'>{props.date}</div>
        <div className='title'>{props.title}</div>
        <div className='company'>{props.company}</div>
        <div className='location'>{props.location}</div>
        {props.link ? (
          <div className='link'>
            <CustomLink
              link={props.link}
              text={props.linkText}
              newWindow={true}
            />
          </div>
        ) : null}
      </div>
      <div className='right'>
        <div className='description'>{props.description}</div>

        {props.skills ? (
          <div className='skills'>
            {props.skillsList.map((skill, index) => (
              <Skill
                name={skill}
                alt={skill
                  .replace("/src/assets/Skills_SVG/", "")
                  .replace(".svg", "")}
                key={index}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CVCard;
