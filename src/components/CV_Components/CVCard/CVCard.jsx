// React-router-dom
import { Link } from "react-router-dom";

// Components
import Skill from "../Skill/Skill";

//SVG
import FIGMA from "../../../assets/Skills_SVG/FIGMA.svg";
import TRELLO from "../../../assets/Skills_SVG/TRELLO.svg";
import HTML5 from "../../../assets/Skills_SVG/HTML5.svg";
import JS from "../../../assets/Skills_SVG/JS.svg";
import MONGODB from "../../../assets/Skills_SVG/MONGODB.svg";
import POSTGRESQL from "../../../assets/Skills_SVG/POSTGRESQL.svg";
import REACT_JS from "../../../assets/Skills_SVG/REACT_JS.svg";
import REACT_NATIVE from "../../../assets/Skills_SVG/REACT_NATIVE.svg";
import RUBY_ON_RAILS from "../../../assets/Skills_SVG/RUBY_ON_RAILS.svg";
import RUBY from "../../../assets/Skills_SVG/RUBY.svg";
import SASS from "../../../assets/Skills_SVG/SASS.svg";
import GITHUB from "../../../assets/Skills_SVG/GITHUB.svg";

// SCSS
import "./CVCard.scss";

const CVCard = (props) => {
  return (
    <div className='cv-card-container '>
      <div className='left'>
        <div className='date'>{props.date}</div>
        <div className='title'>{props.title}</div>
        <div className='company'>{props.company}</div>
        <div className='location'>{props.location}</div>
      </div>
      <div className='right'>
        <div className='description'>{props.description}</div>
        {props.link ? (
          <div className='link'>
            <Link to={props.link} target='_blank' rel='noopener noreferrer'>
              {props.linkText}
            </Link>
          </div>
        ) : null}
        {props.skills ? (
          <div className='skills'>
            {props.skillsList.map((skill, index) => (
              <Skill name={skill} alt={skill} key={index} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CVCard;
