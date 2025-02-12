import React, { useState } from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedin, FaGithub, FaWhatsapp  } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import "./contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from '../footer/Footer';


// Define the Contact component.
const Contact = () => {

  // Create a state variable to store the value of the reCAPTCHA.
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  // Create a state variable to store the form data.
  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  // Create a state variable to store the form errors.
  const [errors, setErrors] = useState({});

  // Handle the change event for the form inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate the form data.
  const validateForm = () => {
    const validationErrors = {};

    // Check if the name field is empty.
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    // Check if the email field is empty.
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }


    // Check if the subject field is empty.
    if (!formData.subject.trim()) {
      validationErrors.subject = 'Subject is required';
    }

    // Check if the message field is empty.
    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }

    return validationErrors;
  };

  const [messageSent, setMessageSent] = useState(false);

  // Handle the submit event for the form.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data.
    const validationErrors = validateForm();
    setErrors(validationErrors);

    // Check if the reCAPTCHA value is not empty.
    if (!recaptchaValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        recaptcha: "Please verify that you are not a robot.",
      }));
      return;
    }

    // If there are no errors, send the email.
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
    // This is the contact section of the website.
    <section className='contact section'>
      <h2 className='section_title'>
        Get in <span>Touch</span>
      </h2>

      {/* // The contact container. */}
      <div className='contact_container container grid'>
        <div className='contact_data'>
          <h3 className='contact_title'>LET'S WORK TOGETHER</h3>
          <p className='contact_description'>
            Feel free to get in touch with me. I am always open to discussing new project, creative ideas or opportunities to be part of your vision.
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
                <h4 className='info_desc'><a href="tel:+27715918903">+2771 591 8903</a></h4>
             </div>
            </div>
          </div>
          {/* // The contact socials. */}
          <div className='contact_socials'>
            <a href='https://www.linkedin.com/in/nelisiwe-gumede-2b393122b/' target="_blank" className='contact_social-link'>
              <FaLinkedin />
            </a>

            <a href='https://wa.link/c1xgz3' target="_blank" className='contact_social-link'>
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
          <div className='contact_recaptcha-container '>
          <ReCAPTCHA
            sitekey="6LcZnAIoAAAAABpv1AXpYOoKnnP9gfUPCTqFdWlr"
            onChange={(value) => setRecaptchaValue(value)}
          />
          </div>
          {errors.recaptcha && <span>{errors.recaptcha}</span>}
          
        <div className='contact_button-container'>
          <button className='contact_button' type='submit'>
            Send 
            <span className='button_icon contact_button-icon'>
              <FiSend />
            </span>
          </button >
          </div>  
          {messageSent && <p className="message-sent">Message sent successfully!</p>}
        </form>
      </div>
      <Footer />
    </section>
  )
}

export default Contact