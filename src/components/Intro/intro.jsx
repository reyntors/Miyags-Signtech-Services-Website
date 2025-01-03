import React, { useEffect, useState } from 'react';
import bg from '../../assets/miyags.png';
import gifHand from '../../assets/hand-gesture.gif';
import './intro.css';
import { Fade } from 'react-reveal';
import billboard from '../../assets/billboard.jpg';
import signage from '../../assets/signage.jpg';
import miniBillboard from '../../assets/mini-billboard.jpg';
import { Link } from 'react-scroll';

const IntroImg = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(false);
  const images = [billboard, signage, miniBillboard];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIn(true); // Start by hiding the current image
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        setSlideIn(true); // Trigger the slide-in animation
      }, 2000); // Allow 0.5 seconds for the image to hide before showing the next one
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="img-container">
      <img
        src={images[currentImageIndex]}
        alt="Intro"
        className={`introImg ${slideIn ? 'slide-in' : ''}`}
      />
    </div>
  );
}

const Intro = () => {
  return (
    <Fade>
      <section id="intro">
        <div className="introContent">
          <img src={bg} alt="" className="bg" />
          <Link
            to="contactus" // The id of the "Contact Us" section
            spy={true}
            smooth={true}
            offset={-88} // Adjust based on your header height
            duration={1000}
          >
            <button className="introBtn">Contact Us Now</button>
          </Link>
          <img src={gifHand} alt="" className="gifHand" />
          <IntroImg />
        </div>
      </section>
    </Fade>
  );
}

export default Intro;
