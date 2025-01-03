import React from 'react'
import './about.css'
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
    <Fade right>
    <section id="about">
        <Fade right>
        <span className="aboutTitle">About Us</span>
        </Fade>
        <div className="aboutDesc">
            <Fade left>
                <div className="aboutDescription">
                    <div className="aboutText">
                        <p>We are Miyags Signtech Sevices, a Davao-based supplier specializing in printing and fabrication
                        services in Mindanao region. Our team is dedicated to providing high-quality solutions for your
                        advertising needs, and we would love the opportunity to become a trusted supplier to your company.</p>
                    </div>  
                </div>
            </Fade>
            </div> 
    </section>
    </Fade>
  )
}

export default About