import React, { useState } from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedin, FaGithub, FaWhatsapp  } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import "./contact.css";
import Footer from '../footer/Footer';



const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }

    if (!formData.subject.trim()) {
      validationErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }

    return validationErrors;
  };

  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    setFormData(initialFormData);

    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm('service_232ssir', 'template_kw0vdhp', e.target, 'qTSEW2o9D97HDP45P')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormData(initialFormData);
        setMessageSent(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        });
    }
  };

  return (
    <section className='contact section'>
      <h2 className='section_title'>
        Get in <span>Touch</span>
      </h2>

      <div className='contact_container container grid'>
        <div className='contact_data'>
          <h3 className='contact_title'>LET'S WORK TOGETHER</h3>
          <p className='contact_description'>
            Feel freen to get in touch with me. I am always open to discussing new project, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="contact_info">
            <div className='info_item'>
              <FaEnvelopeOpen className='info_icon' />
              
              <div>
                <span className='info_title'>Mail me</span>
                <h4 className='info_desc'> nelimajobe@gmail.com</h4>
              </div>
            </div>

            <div className='info_item'>
              <FaPhoneSquareAlt className='info_icon' />
              
              <div>
                <span className='info_title'>Call me</span>
                <h4 className='info_desc'>+2771 5918 903</h4>
              </div>
            </div>
          </div>
          <div className='contact_socials'>
            <a href='https://github.com/Nelisiwe?tab=repositories' className='contact_social-link'>
              < FaGithub/>
            </a>

            <a href='https://www.linkedin.com/in/nelisiwe-gumede-2b393122b/' className='contact_social-link'>
              <FaLinkedin />
            </a>

            <a href='https://wa.link/xxs17c' className='contact_social-link'>
              <FaWhatsapp />
            </a>
          </div>       
        </div>

        <form className='contact_form' onSubmit={handleSubmit}>
          <div className='form_input-group'>
            <div className='form_input-div'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                className='form_control'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div className='form_input-div'>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                className='form_control'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className='form_input-div'>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                className='form_control'
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span>{errors.subject}</span>}
            </div>
          </div>
          <div className='form_input-div'>
            <textarea
              name='message'
              placeholder='Your Message'
              className='form_control textarea'
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span>{errors.message}</span>}
          </div>
          <button className='contact_button' type='submit'>
            Send 
            <span className='button_icon contact_button-icon'>
              <FiSend />
            </span>
          </button >
          {messageSent && <p className="message-sent">Message sent successfully!</p>}
        </form>
      </div>
      <Footer />
    </section>
  )
}

export default Contact