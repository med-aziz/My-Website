import React, { useEffect, useState } from 'react';
import { useStateValue } from '../utils/StateProvider.js';
import ProjectContainer from './ProjectContainer.js';
const ProjectsSection = ({data}) => {
    const [state, _dispatch] = useStateValue()
    useEffect(()=>{ 

    },[state])
    return (
        <section id="projects">
            <h2>{state.language === "ENGLISH" ? "ACADEMIC PROJECTS" : "PROJETS ACADÉMIQUES"}</h2>
            {data.map(project=><ProjectContainer key={project.id} project={project}></ProjectContainer>)}    
        </section>
    )
}

export default ProjectsSection