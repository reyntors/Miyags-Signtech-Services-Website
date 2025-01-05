import React from 'react'
import './about.css'
import Fade from 'react-reveal/Fade';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <Fade left>
    <section id="about">
        <Fade right>
        
        <span className="aboutTitle">About Us</span>
  
        
        </Fade>
        <div className="aboutDesc">
            <Fade left>
                <div className="aboutDescription">
                    <div className="aboutText">
                        <p> Miyags Signtech Sevices, a Davao-based supplier specializing in printing and fabrication
                        services in Mindanao region. Our team is dedicated to providing high-quality solutions for your
                        advertising needs, and we would love the opportunity to become a trusted supplier to your company.</p>
                    </div>  
                </div>
            </Fade>
            </div> 
            <div className="connect-btn-container">
          <button className="connect-btn">
            
            Learn More...</button>
        </div>
    </section>
    </Fade>
  )
}

export default About