import React from 'react'
import './about.css'
import Fade from 'react-reveal/Fade';
import officer from '../../assets/officer.png'

const About = () => {
  return (
    <section id="about">
        <Fade bottom>
        <span className="aboutTitle">About Us</span>
        </Fade>
        <div className="aboutDesc">
            <Fade left>
                <div className="aboutDescription">
                    <div className="aboutText">
                        <h2>Mission</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti totam numquam dolorem quae cupiditate similique sint reprehenderit accusamus aspernatur.</p>
                    </div>  
                </div>
            </Fade>
            <Fade right>
            <div className="aboutDescription">
                <div className="aboutText">
                    <h2>Vision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti totam numquam dolorem quae cupiditate similique sint reprehenderit accusamus aspernatur.</p>
                </div>
            </div>
            </Fade>
            <div className="aboutSustain">
                <div className="sustainText">
                    <h2>Sustainability</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti totam numquam dolorem quae cupiditate similique sint reprehenderit accusamus aspernatur.</p>
                </div>
            </div>
            <div className="aboutCorporate">
                <div className="corporateText">
                    <h2>Corporate Officers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti totam numquam dolorem quae cupiditate similique sint reprehenderit accusamus aspernatur.</p>
                <div className="corporateImgs">

                    <div className="corporateImgText">
                    <img src={officer} alt="" className="corporateImg" />
                    <h2>Reynard Z. Torculas</h2>
                    </div>
                    <div className="corporateImgText">
                    <img src={officer} alt="" className="corporateImg" />
                    <h2>Karl O. Borromeo</h2>
                    </div>
                    <div className="corporateImgText">
                    <img src={officer} alt="" className="corporateImg" />
                    <h2>Jhaerix O. Borromeo</h2>
                    </div>
                    
                   
                </div>
                </div>
            </div>
            <div className="aboutLicense">
                <div className="licenseText">
                    <h2>Licenses and Permits</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti totam numquam dolorem quae cupiditate similique sint reprehenderit accusamus aspernatur.</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default About