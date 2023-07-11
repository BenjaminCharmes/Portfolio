// Components
import Skill from "../Skill/Skill";

//SVG
import CSS3 from "../../../assets/Skills_SVG/CSS3.svg";
import DOCKER from "../../../assets/Skills_SVG/DOCKER.svg";
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
import "./SkillsCard.scss";

const SkillsCard = (props) => {
  return (
    <div className='cv-skills-card-container '>
      <Skill name={HTML5} alt={"HTML5"} />
      <Skill name={CSS3} alt={"CSS3"} />
      <Skill name={JS} alt={"Javascript"} />
      <Skill name={REACT_JS} alt={"React.JS"} />
      <Skill name={REACT_NATIVE} alt={"React_Native"} />
      <Skill name={RUBY_ON_RAILS} alt={"Ruby on Rails"} />
      <Skill name={RUBY} alt={"Ruby"} />
      <Skill name={GITHUB} alt={"Github"} />
      <Skill name={SASS} alt={"SASS"} />
      <Skill name={POSTGRESQL} alt={"PostgreSQL"} />
      <Skill name={MONGODB} alt={"MongoDB"} />
      <Skill name={DOCKER} alt={"Docker"} />
    </div>
  );
};

export default SkillsCard;
