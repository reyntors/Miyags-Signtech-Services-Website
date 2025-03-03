import React from 'react';
import './about.css';
import { motion } from 'framer-motion';
import {  Link as RouterLink } from "react-router-dom";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};



const About = () => {
  return (
   
      <section id="about">
      <div className="about-content">
         <motion.div 
                                initial={{ opacity: 0, x: -100 }}  
                                whileInView={{ opacity: 1, x: 0 }} 
                                viewport={{ once: true, amount: 0.5 }} 
                                transition={{ duration: 0.5 }}>
          <span className="aboutTitle">About Us</span>
          <div className="aboutDesc">
            <p>
              <span className="miyags">Miyags Signtech Services</span>, a Davao-based supplier specializing in
              printing and fabrication services in the Mindanao region.<br/>Our team
              is dedicated to providing high-quality solutions for your
              advertising needs, and we would love the opportunity to become a
              trusted supplier to your company.
            </p>
            <br/>
            <p>Every project will benefit from our creative team of highly experienced professionals who will work one on one with you from the initial concept through completion of your project! Look no farther, we are here for you with expert custom signage and billboard advertising for your business. Let us show you what our team can do for you
            and your brand.</p>
            <h1>WE OFFER  FREE QOUTATION!</h1>
            <div className="connect-btn-container">
              <RouterLink to='/contact' onClick={handleScrollToTop}>
              <button className='connect-btn'>Get Qoute</button>
              </RouterLink>
            </div>
          </div>
        </motion.div>
      </div>
      </section>
   
  );
};

export default About;
