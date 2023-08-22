import React, { useState } from 'react';
import Close from "../images/close.svg";

const ProjectList = ({ img, title, details }) => {
    const[model, setModel] = useState(false);

    const toggleModel = () => {
        setModel(!model);
    };

  return (
    <div className='projects_item'>
        <img src={img} alt='' className='projects_img' />

        <div className='projects_hover' onClick={toggleModel}>
            <h3 className="projects_title">{title}</h3>
        </div>

        {model && (
            <div className="projects_model">
                <div className="projects_model-content">
                    <img src={Close} alt='' className='model_close' onClick={toggleModel} />
                    <h3 className="model_title">{title}</h3>
                
                    <ul className="model_list grid">
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