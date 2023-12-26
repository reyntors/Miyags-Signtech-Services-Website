import React, { useEffect, useState } from 'react';
import './residential.css';
import frontView from '../../assets/front-view-house1.jpg';
import rightView from '../../assets/right-view-house1.jpg';
import rearView from '../../assets/rear-vew-house1.jpg';
import leftView from '../../assets/left-view-house1.jpg';
import { Fade } from 'react-reveal';

const Residential = () => {
  const [currentImages, setCurrentImages] = useState([0, 0, 0, 0]);

  const images = [frontView, rightView, rearView, leftView];

  useEffect(() => {
    const intervalIds = currentImages.map((_, index) => {
      return setInterval(() => {
        setCurrentImages((prevImages) =>
          prevImages.map((prevImage, i) => (i === index ? (prevImage + 1) % images.length : prevImage))
        );
      }, 3000);
    });

    return () => {
      intervalIds.forEach((intervalId) => clearInterval(intervalId));
    };
  }, [currentImages, images.length]);

  const handleNext = (index) => {
    setCurrentImages((prevImages) =>
      prevImages.map((prevImage, i) => (i === index ? (prevImage + 1) % images.length : prevImage))
    );
  };

  const handlePrev = (index) => {
    setCurrentImages((prevImages) =>
      prevImages.map((prevImage, i) => (i === index ? (prevImage - 1 + images.length) % images.length : prevImage))
    );
  };

  const renderResidentialSection = (title, description, index) => (
    <div className="residentials" key={index}>
      <Fade bottom>
        <h2>{title}</h2>
        <p>{description}</p>
      </Fade>
      <Fade bottom>
        <div className="residentialImgs">
          <div className="img-container" style={{ transform: `translateX(${-currentImages[index] * 100}%)` }}>
            {images.map((image, imgIndex) => (
              <img key={imgIndex} src={image} alt="" className="residentialImg" />
            ))}
          </div>
        </div>
        <div>
          <button className="residentialBtn" onClick={() => handlePrev(index)}>
            Prev
          </button>
          <button className="residentialBtn" onClick={() => handleNext(index)}>
            Next
          </button>
        </div>
      </Fade>
    </div>
  );

  return (
    <section id="residential">
      <Fade bottom>
        <span className="weBuildTitle">We Build</span>
      </Fade>

      {renderResidentialSection('Residential House Model', 'Lorem ipsum...', 0)}
      {renderResidentialSection('Commercial Building', 'Lorem ipsum...', 1)}
      {renderResidentialSection('Amenities', 'Lorem ipsum...', 2)}
      {renderResidentialSection('Structural Foundation', 'Lorem ipsum...', 3)}
    </section>
  );
};

export default Residential;
