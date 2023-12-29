import React from 'react'
import backgroundVideo from '../../assets/background.mp4';
import bg from '../../assets/logo.png';
import gifHand from '../../assets/hand-gesture.gif'
import './intro.css'
import { Fade } from 'react-reveal';

const Intro = () => {
  return (
    <Fade>
    <section id="intro">
        <div className="introContent">
        <img src={bg} alt="" className="bg" />
  
        <button className="introBtn">Reserve Now</button>
        
        <img src={gifHand} alt="" className="gifHand" />
   
        <video autoPlay loop muted className="backgroundVideo">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        
       
    </section>
    </Fade>
  )
}

export default Intro