import React from 'react'
import Profile from "../../images/home.jpg"
import MyLogo from "../../images/white-logo.jpg"
import { FaLinkedin, FaGithub, FaWhatsapp, FaDownload  } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import CV from "../../images/Resume.pdf"
import "./home.css"

const Home = () => {
  // Returns a section with the title "Home" and the user's name and title.
  return (
    <section className='home section grid'>
      <div className='home_container'>
       {/* The user's profile image */}
        <img src={Profile} alt='' className='home_img' />
        {/* The user's contact information. */}
        <p className='home_details'>
           nelimajobe@gmail.com
          </p>
          <p className='home_details'>
           Front-End / Software Developer
        </p>

        {/* The user's social media links. */}
        <div className='home_socials'>
            <a href='https://github.com/Nelisiwe?tab=repositories' target="_blank" className='home_social-link'>
              < FaGithub/>
            </a>

            <a href='https://www.linkedin.com/in/nelisiwe-gumede-2b393122b/' target="_blank" className='home_social-link'>
              <FaLinkedin />
            </a>

            <a href='https://wa.link/c1xgz3' target="_blank" className='home_social-link'>
              <FaWhatsapp />
            </a>
          </div>       

        
        <div className='home_button_container'>
          {/* // The button to download the user's resume. */}
           <a href={CV} download='' target="_blank" className='home_button'>
              Resume <span className='button_icon home_button_icon'><FaDownload /></span>
           </a>   
            <img src={MyLogo} alt='' className='home_logo' />
          </div> 
    
      </div>

      <div className='home_content'>
        <div className='home_data'>
          <h1 className='home_title-label'>
          Nelisiwe Gumede
          </h1>
          {/* // Title TypeAnimation sequence. */}
          <h1 className='home_title'>
            I am a <TypeAnimation sequence={[
            'Front-end Developer',
            2000,
            'Software Developer',  
            2000,
            ]} 
          speed={50}
          repeat={Infinity}
              />          
          </h1>

          <p className='home_description'>
          I am a passionate Front-End Developer with 4 years of experience in creating user-friendly mobile and web applications. I recently completed my software programming studies and am actively seeking new opportunities to further my career.          </p>
        </div>
      </div>
    </section>
  )
}

export default Home