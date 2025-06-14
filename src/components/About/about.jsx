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
                                initial={{ opacity: 0, y: 100 }}  
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true, amount: 0.5 }} 
                                transition={{ duration: 0.5 }}>
          <span className="aboutTitle">About Us</span>
          <div className="aboutDesc">
            <p>
              <span className="miyags">Miyags Signtech Services</span>, is a company that specializes in providing both large and
small businesses with innovative and distinctive print services. This business, which
was founded in 2013 and has its headquarters at #8 Jordan St., Riverview Village,
Davao City, specializes in designing, printing, producing, and installing signage choices,
including billboards, indoor/outdoor signs, and digital signs.
The company's objective is to offer print that help clients’ businesses become more
visible. Miyags Signtech Services strives to deliver customized services that meet each
clients’ expectations and the goal is to become a technology and signage company that
integrates creative, effective, and reasonably priced display systems with an emphasis
on the expansion and development of progressive, forward-thinking companies.
The primary market for Miyags Signtech Services now includes large multinational
companies that seek per product visibility in the malls and supermarkets and also brand
recognition in the mass market area thru stores signages.
</p>
<div className="container-mission">
<motion.div 
                                initial={{ opacity: 0, y: 100 }}  
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true, amount: 0.5 }} 
                                transition={{ duration: 0.5 }}>
  <div className="vision">
    <h1>Vision</h1>
    <p>Miyags Signtech Services will be the printer that offers high-quality outputs, always
delivers on time, and covers all segments in the printing industry. We aim to become a
leading provider of print solutions to increase business visibility and communication.
The company's objective is to achieve business goals by partnering with customers and
exceeding their expectations via the use of business transformation technologies and
creative design.</p>
  </div>
  </motion.div>
  <motion.div 
                                initial={{ opacity: 0, y: 100 }}  
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true, amount: 0.5 }} 
                                transition={{ duration: 0.5 }}>
  <div className="mission">
    <h1>Mission</h1>
    <p>• To consistently provide businesses with high-quality print products that drive
customer engagement, enhance brand visibility, and support long-term success.
<br/>• To collaborate closely with businesses, offering tailored print solutions that
combine innovation, creativity, and eco-friendly printing solutions.
<br/>• To be the best employer in Davao by fostering a supportive and inspiring
workplace where every employee feels proud to be part of our team.
<br/>• To grow our business by 20% each year by providing creative, reliable printing
solutions through excellent service, strong partnerships, and a focus on our
customers.</p>
  </div>
  </motion.div>
</div>
<motion.div 
                                initial={{ opacity: 0, x: 100 }}  
                                whileInView={{ opacity: 1, x: 0 }} 
                                viewport={{ once: true, amount: 0.5 }} 
                                transition={{ duration: 0.5 }}>

          
            <div className="connect-btn-container">
              <RouterLink to='/about' onClick={handleScrollToTop}>
              <button className='connect-btn'>Learn more...</button>
              </RouterLink>
            </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </section>
   
  );
};

export default About;
