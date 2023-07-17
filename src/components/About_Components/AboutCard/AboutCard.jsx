// Components
import FooterIcons from "../../Footer/FooterIcons";
import CustomLink from "../../Link/CustomLink";

// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../../store/appStateStore";

// Assets
import ProfilPhoto from "/src/assets/Images/Benjamin_CHARMES_Photo.jpg";

// SCSS
import "./AboutCard.scss";

const AboutCard = () => {
  const appState = useAtomValue(appStateStore);

  return (
    <div className={`about-card ${appState.theme}`}>
      <div className={`left-col ${appState.theme}`}>
        <div className={`top ${appState.theme}`}>
          <img
            className='profil-photo'
            src={ProfilPhoto}
            alt='Profile photo of Benjamin CHARMES'
          />
          <div className='name'> Benjamin CHARMES</div>
          <hr className={appState.theme} />
          <div className='title'>FullStack Web Developer</div>
        </div>
        <div className={`bot ${appState.theme}`}>
          <FooterIcons />
        </div>
      </div>
      <div className={`right-col ${appState.theme}`}>
        <div className='title'>Hello !</div>
        <div className='sub-title'>I'm a FullStack focused Web Developer</div>
        <div className='links'>
          <CustomLink link='/cv' text='CV' newWindow={false} />
          <CustomLink link='/projects' text='PROJECTS' newWindow={false} />
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

export default AboutCard;
