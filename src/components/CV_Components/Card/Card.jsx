// SCSS
import "./Card.scss";

const Card = (props) => {
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
      </div>
    </div>
  );
};

export default Card;
