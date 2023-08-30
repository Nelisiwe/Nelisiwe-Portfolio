import React from 'react'
import Profile from "../../images/home.jpg"
import MyLogo from "../../images/white-logo.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
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
            <a href='https://github.com/Nelisiwe?tab=repositories' className='home_social-link'>
              < FaGithub/>
            </a>

            <a href='https://www.linkedin.com/in/nelisiwe-gumede-2b393122b/' className='home_social-link'>
              <FaLinkedin />
            </a>

            <a href='https://wa.link/xxs17c' className='home_social-link'>
              <FaWhatsapp />
            </a>
          </div>       

        <div className='home_button_container'>
          <Link to='/education' className='button'>
              Hire Me <span className='button_icon'><FaArrowRight /></span>
            </Link>
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