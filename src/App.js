import './App.css';
import AppHeader from './components/AppHeader.js'
import WelcomeSection from './components/WelcomeSection.js';
import ProjectsSection from './components/ProjectsSection.js'
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection'
import AppFooter from './components/AppFooter';
import { useEffect } from 'react';
import { useStateValue } from './utils/StateProvider';
import * as data from './data'
function App() {
  const [state, _] = useStateValue()
  useEffect(()=>{

  }, [state])
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <main id="main-container">
        <WelcomeSection data={state.language === "ENGLISH" ? data.INRODUCTION_DATA_EN : data.INRODUCTION_DATA_FR}/>
        <SkillsSection data={{hardSkills : data.HARD_SKILLS_BOTH,
          softSkills: state.language === "ENGLISH" ? data.SOFT_SKILLS_EN : data.SOFT_SKILLS_FR,
          languages: state.language === "ENGLISH" ? data.LANGUAGES_EN : data.LANGUAGES_FR}}/>
        <EducationSection data={state.language === "ENGLISH" ? data.EDUCATION_EN : data.EDUCATION_FR}/>
        <ProjectsSection data={state.language === "ENGLISH" ? data.PROJECTS_DATA_EN : data.PROJECTS_DATA_FR}/>
        <AppFooter/>
      </main>
    </div>
  );
}

export default App;
