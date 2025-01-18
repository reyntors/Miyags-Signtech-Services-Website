import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      id="about"
    >
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <span className="aboutTitle">About Us</span>
          <div className="aboutDesc">
            <p>
              <span className="miyags">Miyags Signtech Services</span>, a Davao-based supplier specializing in
              printing and fabrication services in the Mindanao region.<br/>Our team
              is dedicated to providing high-quality solutions for your
              advertising needs, and we would love the opportunity to become a
              trusted supplier to your company.
            </p>
            <div className="connect-btn-container">
              
            </div>
          </div>
        </motion.div>
      </div>
     
    </motion.section>
  );
};

export default About;
