// SCSS
import "./CV.scss";

// Components
import Title from "../../components/CV_Components/Title/Title";
import Card from "../../components/CV_Components/Card/Card";

const CV = () => {
  return (
    <div className='cv-container'>
      <div className='skills'>
        <Title text='My Skills' />
        <Card date='' title='' company='' location='' description='' />
        <Card date='' title='' company='' location='' description='' />
      </div>
      <div className='experiences'>
        <Title text='Experiences' />
        <Card date='' title='' company='' location='' description='' />
        <Card date='' title='' company='' location='' description='' />
      </div>
      <div className='formation'>
        <Title text='Formation' />
        <Card date='' title='' company='' location='' description='' />
        <Card date='' title='' company='' location='' description='' />
        <Card
          date='2016 - 2018'
          title="Master's degree in Chemistry"
          company='Faculty of Science'
          location='Saint-Jérôme, Marseille, France'
          description='Master 2 Professional Chemistry PACS (Advanced Chemical and Spectroscopic Analysis)'
        />
        <Card
          date='2015 - 2016'
          title="Bachelor's degree in Chemistry"
          company='Faculty of Science'
          location='Saint-Jérôme, Marseille, France'
          description='3rd year of Chemistry degree'
        />
        <Card
          date='2013 - 2015'
          title='University Diploma of Technology in Chemistry'
          company='University Institute of Technology'
          location='Saint-Jérôme, Marseille, France'
          description='University Diploma of Technology in Chemistry, analysis and synthesis option'
        />
      </div>
    </div>
  );
};

export default CV;
