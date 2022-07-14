import React from 'react'

const ProjectContainer = ({project}) => {
    return (
        <div className="project-tile">
            <h3 className="proj-title">{project.title}</h3>
            <p className="proj-desc">{project.description}</p>
            {project.link === undefined ? ""  : <a className="proj-link" target="_blank" href={project.link}>link to project</a>}
        </div>
    )
}

export default ProjectContainer