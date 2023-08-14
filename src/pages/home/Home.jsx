import React from 'react'
import Profile from "../../assets/home.jpg";
import MyLogo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      <div className='home_container'>
      <h1 className='home_image_title'>Nelisiwe Software Developer</h1>
        <img src={Profile} alt='' className='home_img' />
        <Link to='/education' className='button'>
            Hire Me <span className='button_icon'><FaArrowRight /></span>
          </Link>
          <img src={MyLogo} alt='' className='home_logo' />
      </div>

      <div className='home_content'>
        <div className='home_data'>
          <h1 className='home_title'>
            <span>I'm Nelisiwe Gumede.</span> Front-end/Software Developer
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