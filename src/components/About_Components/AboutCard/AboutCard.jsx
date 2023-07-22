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
          <div className='title'>
            {appState.language === "english"
              ? "FullStack Web Developer"
              : "Développeur Web FullStack"}
          </div>
        </div>
        <div className={`bot ${appState.theme}`}>
          <FooterIcons />
        </div>
      </div>
      <div className={`right-col ${appState.theme}`}>
        <div className='title'>Hello !</div>
        <div className='sub-title'>
          {appState.language === "english"
            ? "I'm a FullStack Web Developer"
            : "Je suis développeur Web FullStack"}
        </div>
        <div className='links'>
          <CustomLink link='/cv' text='CV' newWindow={false} />
          <CustomLink
            link='/projects'
            text={appState.language === "english" ? "PROJECTS" : "PROJETS"}
            newWindow={false}
          />
        </div>
        <div className='description'>
          {appState.language === "english"
            ? "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me."
            : "Je suis à l'écoute de toutes offres qui me permettrait de pouvoir de contribuer, apprendre et évoluer. Si vous avez une opportunité qui correspond à mes compétences et à mon expérience, n'hésitez pas à me contacter."}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
