import React from 'react'
import './about.css'
// import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
     <motion.section 
                 
        initial={{ opacity: 0, y: 100 }} // Starts from below with opacity 0
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} 
              >
    <section id="about">
         <motion.span 
                     
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  >
        
        <span className="aboutTitle">About Us</span>
  
        
        </motion.span>
        <div className="aboutDesc">
             <motion.div 
                         
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                      >
                <div className="aboutDescription">
                    <div className="aboutText">
                        <p> Miyags Signtech Sevices, a Davao-based supplier specializing in printing and fabrication
                        services in Mindanao region. Our team is dedicated to providing high-quality solutions for your
                        advertising needs, and we would love the opportunity to become a trusted supplier to your company.</p>
                    </div>  
                </div>
            </motion.div>
            </div> 
            <div className="connect-btn-container">
          <button className="connect-btn">
            
            Learn More...</button>
        </div>
    </section>
    </motion.section>
  )
}

export default About