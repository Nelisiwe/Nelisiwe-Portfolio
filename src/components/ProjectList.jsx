import React, { useState } from 'react';
import Close from "../images/close.svg";

// This is the ProjectList component.
const ProjectList = ({ img, title, details }) => {
    // Declare a state variable to track whether the model is open or closed.
    const[model, setModel] = useState(false);

    const toggleModel = () => {
        setModel(!model);
    };

  // Returns the project list UI.
  return (
    <div className='projects_item'>
        <img src={img} alt='' className='projects_img' />

        <div className='projects_hover' onClick={toggleModel}>
            <h3 className="projects_title">{title}</h3>
        </div>

        {/* The `details` prop is an array of objects that contain the icon, title, and description of the project. */}
        {model && (
            
            <div className="projects_model">
                <div className="projects_model-content">
                    <img src={Close} alt='' className='model_close' onClick={toggleModel} />
                    <h3 className="model_title">{title}</h3>
                
                    <ul className="model_list grid">
                        {/*Iterate over the `details` array and render a list item for each project detail. */}
                        {details.map(({icon, title, desc}, index) => {
                            return(
                                <li className="model_item" key={index}>
                                    <span className='item_icon'>{icon}</span>
                                    <div>
                                        <span className='item_title'>{title}</span>
                                        <span className='item_details'>{desc}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <img src={img} alt='' className='model_img' />
                </div>
            </div>
         )}     
    </div>
  )
}

export default ProjectList