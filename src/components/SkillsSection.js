import React, { useEffect } from "react";
import "../styles/SkillsSection.css"
import { useRef } from "react";
import { useStateValue } from "../utils/StateProvider";
const SkillsSection = ({data: {hardSkills, softSkills, languages}}) => {
    const slides = useRef([])
    const [state, _] = useStateValue()
    useEffect(()=>{
    },[slides, state])
    const moveSlide = (n) => {
        for(let i=0; i<slides.current.length; i++){
            if(i !== n){
                slides.current[i].style.display = "none"
                continue
            }
            slides.current[i].style.display = "block"
        }
    }
    return (<section id = "skills-section">
        <div className="slider">
            <div className="slides">
                <div id="skill-slide-hard" className="slide fade" ref={(element)=>{slides.current[0] = element}}>
                    <span className="skill-slide-title">Hard skills</span>
                    <ul className="skill-list">
                        {hardSkills.map(skill => <li key={skill.id}><p>{skill.name}</p></li>)}
                    </ul>
                    <a className="slide-to-previous" onClick={()=>moveSlide(2)} title="Next"></a>
                    <a className="slide-to-next" onClick={()=>moveSlide(1)} title="Next"></a>
                </div>
                <div id="skill-slide-soft" className="slide fade" ref={(element)=>{slides.current[1] = element}}>
                    <span className="skill-slide-title">Soft skills</span>
                    <ul className="skill-list">
                        {softSkills.map(skill => <li key={skill.id}><p>{skill.name}</p></li>)}
                    </ul>
                    <a className="slide-to-previous" onClick={()=>moveSlide(0)} title="Previous"></a>
                    <a className="slide-to-next" onClick={()=>moveSlide(2)} title="Previous"></a>
                </div>
                <div id="skill-slide-language" className="slide fade" ref={(element)=>{slides.current[2] = element}}>
                    <span className="skill-slide-title">{state.language === "ENGLISH" ? "Languages" : "Langues"}</span>
                    <ul className="skill-list">
                        {languages.map(language => <li key={language.id}><p>{language.name}</p></li>)}
                    </ul>
                    <a className="slide-to-previous" onClick={()=>moveSlide(1)} title="Previous"></a>
                    <a className="slide-to-next" onClick={()=>moveSlide(0)} title="Previous"></a>
                </div>
            </div>
        </div>
    </section>)
}

export default SkillsSection