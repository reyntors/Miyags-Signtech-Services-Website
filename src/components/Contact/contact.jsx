import React, { useState } from 'react';
import './contact.css';
import { FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";
import emailjs from 'emailjs-com'; 
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { motion } from 'framer-motion';



const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Call EmailJS to send the email
    emailjs
      .send(
        'service_gcqz87p', //  EmailJS service ID
        'template_i7cyqet', //  EmailJS template ID
        formData,
        '0p_N2zH_Jazw3Mzec' //  EmailJS user ID
      )
      .then(
        (response) => {
          setIsSubmitting(false);
          setStatusMessage('Your message has been sent successfully!');
          setFormData({ fullName: '', email: '', phone: '', message: '', subject: '' });
        },
        (error) => {
          setIsSubmitting(false);
          setStatusMessage('There was an error sending your message. Please try again.');
        }
      );
  };

  return (
  
    <section id="contactus">
    <div className="contact-content">
        <h2 className="reachus">REACH US</h2>
        <span className="contactUsTitle">Contact </span>

        <div className="contactDetailsContainer">
          <div className="contactDetail">
            <FaPhone className="contactIcon" />
            <h1>CALL US</h1>
            <p className="detailDesc">(082) 221-0918 <br />+63917-717-0415</p>
          </div>
          <div className="contactDetail">
            <FaEnvelope className="contactIcon" />
            <h1>EMAIL</h1>
            <p className="detailDesc">sales@miyagssigntech.com</p>
          </div>
          <div className="contactDetail">
            <FaBuilding className="contactIcon" />
            <h1>OFFICE</h1>
            <p className="detailDesc">Lot 7 Jordan St. Riverview Village Brgy. 19-B, Bacaca, Davao City, Davao del Sur, Philippines 8000</p>
          </div>
        </div>
        <p className="contactUsDesc">
          For customers and potential customers, kindly use the form provided here. 
          We are eager to talk with you about what your company’s new signage or advertising might look like!
        </p>
        

        <form onSubmit={handleSubmit} className="contactUs">
  <div className="form-container">
    <div className="form-fields">
      <input
        type="text"
        className="fullname"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        className="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address (required)"
        required
      />
      <input
        type="text"
        className="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        required
      />
      <input
        type="text"
        className="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="message2"
        placeholder="How can Miyags Signtech help you? (Message Here)"
        rows="6"
      ></textarea>
      <button type="submit" className="submitBtn" disabled={isSubmitting}>
      {isSubmitting ? 'Sending...' : (
        <>
          <FontAwesomeIcon icon={faPaperPlane} /> Send Message
        </>
      )}
    </button>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>

    <div className="map-container">
      <h2>Head Office</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2724896527347!2d125.60131537481122!3d7.0943809929088255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d53b7a437a5%3A0xffee75d8ccbea006!2sMiyags%20Signtech%20Services!5e0!3m2!1sen!2sph!4v1737120579966!5m2!1sen!2sph"
        title="Miyags Signtech Services Location"
      ></iframe>
    </div>
  </div>
</form>
   
  </div>
  </section>

  );
};

export default Contact;
