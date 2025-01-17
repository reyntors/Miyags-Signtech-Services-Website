import React, { useState } from 'react';
import './contact.css';
// import { Fade } from 'react-reveal';
import { FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";
import emailjs from 'emailjs-com'; 
import { motion } from 'framer-motion';

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
    <motion.section 
    
    initial={{ opacity: 0, x: -100 }}  
     whileInView={{ opacity: 1, x: 0 }} 
     viewport={{ once: true, amount: 0.5 }} 
     transition={{ duration: 0.5 }}
  >
    <section id="contactus">
       
        <h2 className="reachus">REACH US</h2>
        <span className="contactUsTitle">Contact Us</span>

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
        <div className="contactLeft">
          
            <input
              type="text"
              className="fullname"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
         
        </div>
       
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
      

        <div className="contactRight">
          {/* Add any additional content if needed */}
        </div>

     
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="message2"
            placeholder="How can Miyags Signtech help you? (Message Here)"
            rows="6"
          ></textarea>
      

        <button type="submit" className="submitBtn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </section>
    </motion.section>
  );
};

export default Contact;
