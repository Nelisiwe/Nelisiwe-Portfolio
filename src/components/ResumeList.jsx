import React from 'react';
import parse from 'html-react-parser';

// This is the ResumeList component.
const ResumeList = ({ icon, year, title, desc }) => {
  // Returns the resume list UI.
  return (
    <div className='resume_item'>
        <div className='resume_icon'>{icon}</div>

        <span className='resume_date'>{year}</span>
        {/* The `parse` function is used to parse the HTML content of the title prop. */}
        <h3 className='resume_subtitle'>{parse(title)}</h3>
        <p className='resume_description'>{desc}</p>
    </div>
  );
};

export default ResumeList