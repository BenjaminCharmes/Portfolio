// Components
import FooterIcons from "../../Footer/FooterIcons";
import CustomLink from "../../Link/CustomLink";

// Assets
import ProfilPhoto from "/src/assets/Images/Benjamin_CHARMES_Photo.jpg";

// SCSS
import "./Card.scss";

const Card = () => {
  return (
    <div className='about-card'>
      <div className='left-col'>
        <div className='top'>
          <img className='profil-photo' src={ProfilPhoto} />
          <div className='name'> Benjamin CHARMES</div>
          <hr />
          <div className='title'>FullStack Web Developer</div>
        </div>
        <div className='bot'>
          <FooterIcons />
        </div>
      </div>
      <div className='right-col'>
        <div className='title'>Hello !</div>
        <div className='sub-title'>I'm a FullStack focused Web Developer</div>
        <div className='links'>
          <CustomLink link='cv' text='CV' />
          <CustomLink link='projects' text='PROJECTS' />
        </div>
        <div className='description'>
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </div>
      </div>
    </div>
  );
};

export default Card;
