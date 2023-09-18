import React from 'react';
import { resume}  from '../../data';
import ResumeList from '../../components/ResumeList';
import Skills from '../../components/Skills';

import "./education.css"

const Education = () => {
  // Returns a section with the title "My Projects" and a list of projects.
  return (
    <main className='section container'>
      <section className='resume' >
      <h2 className='section_title'>Experience & <span>Education</span></h2>
       
       <div className="resume_container grid">
        <div className="resume_data">
          {resume.map((val) => {
            if (val.category === 'experience') {
              return <ResumeList key={val.id} {...val} />;
            }
          })}
        </div>
        <div className="resume_data">
          {resume.map((val) => {
            if (val.category === 'education') {
              return <ResumeList key={val.id} {...val} />;
            }
          })}
        </div>     
       </div>
      </section>

      <div className="separator"></div>

      <section className='skills'>
        <h3 className='section_subtitle subtitle_center'>Skills</h3>

        <div className='skills_container grid'>
          <Skills />
        </div>
      </section>
    </main>
  );
};

export default Education