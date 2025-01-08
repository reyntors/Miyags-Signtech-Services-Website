import React, { useEffect, useState } from 'react';
// import bg from '../../assets/miyags.png';
// import gifHand from '../../assets/hand-gesture.gif';
import './intro.css';
import { Fade } from 'react-reveal';
import billboard1 from '../../assets/billboard/billboard.jpg';
import billboard2 from '../../assets/billboard/billboard2.jpg';
import billboard3 from '../../assets/billboard/billboard3.jpg';
import billboard4 from '../../assets/billboard/billboard4.jpg';
import signage from '../../assets/signage.jpg';
import miniBillboard from '../../assets/mini-billboard.jpg';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


const IntroImg = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [slideIn, setSlideIn] = useState(false);
  const images = [billboard1,billboard2,billboard3, billboard4, signage, miniBillboard];
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true); 
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        setIsFading(false);  
      }, 1000); 
    }, 5000); 

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="img-container">
      <img
        src={images[currentImageIndex]}
        alt="Intro"
        className={`introImg ${isFading ? "fade-out" : "fade-in"}`}
      />
    </div>
  );
}

const Intro = () => {
  return (
    <Fade right>
     <section id="intro">
  <div className="introContent">
    {/* Background Image */}
    {/* <img src={bg} alt="" className="bg" /> */}

    <div className="bg">
      <h1>
        COMPREHENSIVE <span className="highlight">OUTDOOR SIGN</span>
        <br />
        <span className="highlight2">SOLUTIONS</span>TO YOUR NEEDS
      </h1>
    </div>

    <Link
      to="contactus" // The id of the "Contact Us" section
      spy={true}
      smooth={true}
      offset={-88} // Adjust based on your header height
      duration={1000}
    >
      <button className="introBtn">
        Let's get started <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </Link>
    {/* <img src={gifHand} alt="" className="gifHand" /> */}
    <IntroImg />
  </div>
</section>

    </Fade>
  );
}

export default Intro;
