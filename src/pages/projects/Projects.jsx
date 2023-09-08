import React from 'react';
import { project } from '../../data';
import ProjectList from '../../components/ProjectList';
import "./projects.css"

const Projects = () => {
  // Returns a section with the title "My Projects" and a list of projects
  return (
    <section className='portfolio section'>
      <h2 className='section_title'>My <span>Projects</span></h2>

      <div className='projects_container container grid'>
        {project.map((item) => {
          return <ProjectList key={item.id} {...item} />;
        })}
      </div>
    </section>
  )
}

export default Projects