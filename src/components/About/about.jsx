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
              Miyags Signtech Services, a Davao-based supplier specializing in
              printing and fabrication services in the Mindanao region. Our team
              is dedicated to providing high-quality solutions for your
              advertising needs, and we would love the opportunity to become a
              trusted supplier to your company.
            </p>
            <div className="connect-btn-container">
              
            </div>
          </div>
        </motion.div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2724896527347!2d125.60131537481122!3d7.0943809929088255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d53b7a437a5%3A0xffee75d8ccbea006!2sMiyags%20Signtech%20Services!5e0!3m2!1sen!2sph!4v1737120579966!5m2!1sen!2sph"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Miyags Signtech Services Location"
        ></iframe>
      </div>
    </motion.section>
  );
};

export default About;
