// SCSS
import "./Skill.scss";

const Skill = (props) => {
  return (
    <div className='skill-icon'>
      <img src={props.name} alt={`Icône de ${props.alt}`} />
    </div>
  );
};

export default Skill;
