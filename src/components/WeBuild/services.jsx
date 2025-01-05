import React, { useState } from 'react';
import './services.css';
import landingPage from '../../assets/Drawing/SignType/Landing Page2.jpg';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const servicesData = [
  {
    name: 'Column Ads',
    img: require('../../assets/Drawing/Column ads.jpg'),
  },
  {
    name: 'Vehicle Graphics',
    img: require('../../assets/Drawing/Vehicle Graphics Sticker.jpg'),
  },
  {
    name: 'Gondola Shelves Dress-up',
    img: require('../../assets/Drawing/End Cap Gondola Dress-up.jpg'),
  },
  {
    name: 'Pylon',
    img: require('../../assets/Drawing/Pylon.jpg'),
  },
  {
    name: 'Escalator Sticker Ads',
    img: require('../../assets/Drawing/Elevator ads.jpg'),
  },
  {
    name: 'Wall Signage',
    img: require('../../assets/Drawing/Signage 1.jpg'),
  },
  {
    name: 'Monument Sign',
    img: require('../../assets/Drawing/Signage 2.jpg'),
  },
  {
    name: 'Flag Banner',
    img: require('../../assets/Drawing/Flag Banner.jpg'),
  },
  {
    name: 'Island Display Shelves Dress-up',
    img: require('../../assets/Drawing/Island Display Dress-up.jpg'),
  },
  {
    name: 'Build-up Signages',
    img: require('../../assets/Drawing/Signage 3.jpg'),
  },
  {
    name: 'Ads Standee',
    img: require('../../assets/Drawing/Standee.jpg'),
  },
  {
    name: 'Sticker Ads',
    img: require('../../assets/Drawing/Sticker 1.jpg'),
  },
  {
    name: 'Display Sticker',
    img: require('../../assets/Drawing/Sticker 2.jpg'),
  },
  {
    name: 'Tarp Printing',
    img: require('../../assets/Drawing/Tarpaulin.jpg'),
  },
  {
    name: 'Trophy',
    img: require('../../assets/Drawing/Trophy.jpg'),
  },
  {
    name: 'Wall Ads',
    img: require('../../assets/Drawing/Wall Ads.jpg'),
  },
  {
    name: 'Wall Sticker',
    img: require('../../assets/Drawing/Wall Sticker Signage.jpg'),
  },

];const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open modal with selected image
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  // Go to the previous image
  const goToPrevious = () => {
    const newIndex = (currentImageIndex - 1 + servicesData.length) % servicesData.length;
    setSelectedImage(servicesData[newIndex].img);
    setCurrentImageIndex(newIndex);

  };

  // Go to the next image
  const goToNext = () => {
    const newIndex = (currentImageIndex + 1) % servicesData.length;
    setSelectedImage(servicesData[newIndex].img);
    setCurrentImageIndex(newIndex);
  };

  return (
    <section className="services">
      <Fade bottom>
        <section id="sign">
          <h1 className="explore">GUIDE TO BASIC SIGN TYPES</h1>
          <span className="weBuildTitle">Different Types of Signs</span>
          <div className="signDesc">
            <p>
              This drawing helps you illustrate some basic types of signs that
              assist businesses and organizations in communicating effectively,
              offering insights into selecting the ideal signage solution for
              various needs.
            </p>
          </div>
          <img src={landingPage} alt="Sign Type" className="signtype" />
        </section>
      </Fade>

      <h1 className="explore">EXPLORE</h1>
      <h2 className="services-title">Our Services</h2>
      <Fade right>
        <div className="services-marquee">
          {/* Marquee container */}
          <div className="marquee-content">
            {servicesData.map((service, index) => (
              <div className="service-item" key={index} onClick={() => openModal(service.img, index)}>
                <img src={service.img} alt={service.name} className="service-image" />
                <p className="service-name">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* Modal Overlay with smooth fade-in */}
      {isModalOpen && (
  <div className={`modal-overlay ${isModalOpen ? 'show' : ''}`} onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      {/* Close Button */}
      <button className="close-button" onClick={closeModal}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      
      {/* Previous and Next Buttons */}
      <button className="prev-arrow" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img src={selectedImage} alt="Large View" className="modal-image" />
      
      <button className="next-arrow" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  </div>
)}

      <div className="learn-more-container">
        <button className="learn-more-btn">
          Learn More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
};

export default Services;