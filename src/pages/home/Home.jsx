import React from 'react'
import Profile from "../../images/home.jpg"
import MyLogo from "../../images/white-logo.jpg"
import { FaLinkedin, FaGithub, FaWhatsapp, FaDownload  } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import CV from "../../images/Resume.pdf"
import "./home.css"

const Home = () => {
  
  return (
    <section className='home section grid'>
      <div className='home_container'>
        <img src={Profile} alt='' className='home_img' />
        <p className='home_details'>
           nelimajobe@gmail.com
          </p>
          <p className='home_details'>
           Front-End / Software Developer
        </p>

        <div className='home_socials'>
            <a href='https://github.com/Nelisiwe?tab=repositories' target="_blank" className='home_social-link'>
              < FaGithub/>
            </a>

            <a href='https://www.linkedin.com/in/nelisiwe-gumede-2b393122b/' target="_blank" className='home_social-link'>
              <FaLinkedin />
            </a>

            <a href='https://wa.link/xxs17c' target="_blank" className='home_social-link'>
              <FaWhatsapp />
            </a>
          </div>       

        
        <div className='home_button_container'>
           <a href={CV} download='' className='home_button'>
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
            Im a passionate Front-end Developer with 4 years of work experience in creating mobile and web application that are user friendly. I'm currently doing a Software Development at Younglings Africa.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home