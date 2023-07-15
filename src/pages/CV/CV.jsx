// Components
import CVTitle from "../../components/CV_Components/CVTitle/CVTitle";
import CVCard from "../../components/CV_Components/CVCard/CVCard";
import SkillsCard from "../../components/CV_Components/SkillsCard/SkillsCard";
import H1Title from "../../components/H1Title/H1Title";
import Button from "../../components/Button/Button";

//SVG
import FIGMA from "../../assets/Skills_SVG/FIGMA.svg";
import TRELLO from "../../assets/Skills_SVG/TRELLO.svg";
import NODE_JS from "../../assets/Skills_SVG/NODE_JS.svg";
import NOTION from "../../assets/Skills_SVG/NOTION.svg";
import POSTMAN from "../../assets/Skills_SVG/POSTMAN.svg";
import GITLAB from "../../assets/Skills_SVG/GITLAB.svg";
import NUXT_JS from "../../assets/Skills_SVG/NUXT_JS.svg";
import XCODE from "../../assets/Skills_SVG/XCODE.svg";
import VUE_JS from "../../assets/Skills_SVG/VUE_JS.svg";

// SCSS
import "./CV.scss";

const CV = () => {
  const handleDownload = () => {
    const downloadUrl = "src/assets/pdf/CV_Benjamin_CHARMES_english.pdf";
    window.open(downloadUrl);
  };

  return (
    <div className='cv-container'>
      <div className='content-container'>
        <div className='title-container'>
          <H1Title title={"CV"} />
          <Button onClick={handleDownload} text={"Download"} />
        </div>
        <div className='skills'>
          <CVTitle text='My Skills' />
          <SkillsCard />
        </div>
        <div className='experiences'>
          <CVTitle text='Experiences' />
          <CVCard
            date='2023'
            title='Internship'
            company='Loxpert'
            location='France'
            description='Participation in the mobile optimisation of the Loxpert platform and the development of its mobile application.'
            link='https://www.loxpert.fr'
            linkText='Visit Loxpert'
            skills={true}
            skillsList={[
              NODE_JS,
              NUXT_JS,
              VUE_JS,
              POSTMAN,
              GITLAB,
              XCODE,
              FIGMA,
              NOTION,
              TRELLO,
            ]}
          />
          <CVCard
            date='2019 - 2022'
            title='Contract Teacher of physics and chemistry'
            company='French Ministry of Education'
            location='France'
            description='Taking care of several classes for students in middle and high school:

          - 2022, Martigues: 8 classes.
          - 2021, Salon-de-Provence: 4 classes.
          - 2020 - 2021 Sault: 4 classes.
          - 2020 - 2021 Carpentras: 8 classes.
          - 2019 Aix-en-Provence: 11 classes.'
          />
          <CVCard
            date='2018'
            title='Internship'
            company='Robertet'
            location='Grasse, France'
            description='Development of a method for the determination of Farnesol in sandalwood essential oils by GC-MS - 6 months'
          />
          <CVCard
            date='2017'
            title='Internship'
            company='IMBE'
            location='Marseille, France'
            description='Study of the aging of olive oil cut by vegetable oils with FTIR monitoring - 2 months'
          />
          <CVCard
            date='2015'
            title='Internship'
            company='CEA, Cadarache'
            location='Saint-Paul-lès-Durance, France'
            description='Updating chemical risk assessments for a nuclear facility - 2 months'
          />
        </div>
        <div className='formation'>
          <CVTitle text='Formation' />
          <CVCard
            date='2022 - 2023'
            title='Developer training'
            company='The Hacking Project'
            location='France'
            description={`⏺ -  24 intensive weeks in peer learing

    12 weeks on Ruby on Rails
    12 weeks on React.JS
    
    ⏺ - 8 weeks work experience`}
          />
          <CVCard
            date='2022 - 2022'
            title='Cyber-security training'
            company='The Hacking Project'
            location='France'
            description={`⏺ -  Introduction training: 3 intense weeks of peer-learning

    Activities: Learn how to create a simple website
    Automate recurring tasks
    Understanding the challenges of code
    
    ⏺ - Cybersecurity training: 1 week to protect yourself
    
    Discover the tools used by hackers
    Playing with them to exploit vulnerabilities
    Protect yourself against attacks`}
          />

          <CVCard
            date='2016 - 2018'
            title="Master's degree in Chemistry"
            company='Faculty of Science'
            location='Saint-Jérôme, Marseille, France'
            description='Master 2 Professional Chemistry PACS (Advanced Chemical and Spectroscopic Analysis)'
          />
          <CVCard
            date='2015 - 2016'
            title="Bachelor's degree in Chemistry"
            company='Faculty of Science'
            location='Saint-Jérôme, Marseille, France'
            description='3rd year of Chemistry degree'
          />
          <CVCard
            date='2013 - 2015'
            title='University Diploma of Technology in Chemistry'
            company='University Institute of Technology'
            location='Saint-Jérôme, Marseille, France'
            description='University Diploma of Technology in Chemistry, analysis and synthesis option'
          />
        </div>
      </div>
    </div>
  );
};

export default CV;
