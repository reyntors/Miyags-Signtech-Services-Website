import React, { useState } from 'react';
import './services.css';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronLeft, faChevronRight, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LandingPage from '../../assets/Drawing/SignType/Landing Page2.jpg'


const imagePaths = {
  Vehicle: require('../../assets/Drawing/Vehicle Graphics Sticker.jpg'),
  Signage: require('../../assets/Drawing/Signage 3.jpg'),
  RoofSignage: require('../../assets/Drawing/Signage 1.jpg'),
  MonumentSignage: require('../../assets/Drawing/Signage 2.jpg'),
  // Add more mappings as needed
};






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

];




const Services = () => {
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

  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (path) => {
    setHoveredImage(imagePaths[path]);
  };
  
  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <section className="services">
      <Fade left>
      <section id="sign">
         
          
          <div className="signtype-container">
          
          <svg
          className="responsive-svg"
          viewBox="0 0 4096 2858"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"  // Set width to 100% to make it responsive
            // Maintain aspect ratio
        >

          <image
            id="LandingPage2"
            href={LandingPage}  
            width="100%"  
            height="100%"  
            pointer-events="none"
          />
        
      <path id="Signage15"  opacity="0.01" d="M3049.5 844L2303.5 797.5V733L2498.5 744L2507 535.5L2912 594V768L3049.5 778V844Z" fill="#D9D9D9" stroke="black" />
      <path id="Signage14" opacity="0.01" d="M3966 442.5V764.5L3366 794.5V514.5L3966 442.5Z" fill="#D9D9D9" stroke="black" />
      <path id="Signage13" opacity="0.01" d="M3510.5 1695L3478.5 1715L3445 1700.5V1205L3287.5 1225.5L3249 1186.5L3287.5 1139.5L3445 1122.5V1000H3510.5V1186.5L3700.5 1205L3739.5 1250.5L3700.5 1292.5L3504 1267.5L3510.5 1695Z" fill="#D9D9D9" stroke="black" />
      <path 
      id="Signage12"  
      opacity="0.01" 
      d="M3232.5 1802L2675.5 1683V1395L2776.5 1407.5C2848.67 1349.83 3026.9 1278.8 3162.5 1456L3232.5 1464.5V1802Z" 
      fill="#D9D9D9" 
      stroke="black"
      onMouseEnter={() => handleMouseEnter('MonumentSignage')}  // Dynamically pass the path key
          onMouseLeave={handleMouseLeave}
      />
      <path id="Signage11"  opacity="0.01" d="M2420.5 1858.5L2264 1803V1772L2228.5 1759.5L2296.5 1533.5L2481 1587.5L2420.5 1858.5Z" fill="#D9D9D9" stroke="black"/>
      <path id="Signage10"   opacity="0.01" d="M2261 1891.5L2084 1828.5L2089 1708L2265.5 1770.5L2261 1891.5Z" fill="#D9D9D9" stroke="black"/>
      <path id="Signage9"  opacity="0.01" d="M2070 1949.5L1857.5 1856.5V1775.5L2070 1856.5V1949.5Z" fill="#D9D9D9" stroke="black"/>
      <path id="Signage8"   opacity="0.01" d="M2997.5 2138.5V1926L3453 1904.5V2099L2997.5 2138.5Z" fill="#D9D9D9" stroke="black"/>
      <path id="Signage7"  opacity="0.01" d="M1825.5 1319V1032L2408 1039.5V1280L1825.5 1319Z" fill="#D9D9D9" stroke="black"/>
      <path id="Signage6"  opacity="0.01" d="M539 968.5V1056H712V968.5H539Z" fill="#D9D9D9" stroke="black"/>
      <path id="Signage5"  opacity="0.01" d="M376.5 990.5H34.5V785.5H376.5V990.5Z" fill="#D9D9D9" stroke="black"/>
      <path id="Signage4"  opacity="0.01" d="M840 869.5H620.5V757H840V869.5Z" fill="#D9D9D9" stroke="black"/>
      <path id="Signage3" opacity="0.01" d="M865.5 766.5V873.5L1509.5 843V665.5L865.5 766.5Z" fill="#D9D9D9" stroke="black"/>
      <path id="Signage2" 
          opacity="0" 
          d="M1462.5 459.5L1467.5 551L880 683.5V607L1462.5 459.5Z" 
          fill="#D9D9D9" 
          stroke="black"
          onMouseEnter={() => handleMouseEnter('RoofSignage')}  // Dynamically pass the path key
          onMouseLeave={handleMouseLeave}
      />
      <path id="Signage1" 
          opacity="0.01" 
          d="M1711.5 220L1712 825L1534.5 822V201.5L1711.5 220Z" 
          fill="#D9D9D9" 
          stroke="black"
          onMouseEnter={() => handleMouseEnter('Signage')}  // Dynamically pass the path key
          onMouseLeave={handleMouseLeave}
      />
      <path id="Awnings" opacity="0.01" d="M1694 909V1049L761 1014V964.5L844.5 924L1694 909Z" fill="#D9D9D9" stroke="black"/>
      <path id="Billboards" opacity="0.01" d="M876 487.5H264.5V63H876V487.5Z" fill="#D9D9D9" stroke="black"/>
      <path id="Banners" opacity="0.01" d="M1573.5 1279.5L894.5 1170V1083L1573.5 1145V1279.5Z" fill="#D9D9D9" stroke="black"/>
      <path id="Vehicle" 
          opacity="0" 
          d="M1607.5 1997L689 1821L696.5 1381L1561.5 1314L1607.5 1997Z" 
          fill="#D9D9D9" 
          stroke="black" 
          onMouseEnter={() => handleMouseEnter('Vehicle')}  // Dynamically pass the path key
          onMouseLeave={handleMouseLeave}
      />
   
      </svg>
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


            {hoveredImage && (
              <div className="hover-overlay" style={{ pointerEvents: "none" }}>
                <img  src={hoveredImage} alt="Example"  />
                
              </div>
            )}
          </div>
        </section>
      </Fade>
           
      <h1 className="explore">EXPLORE</h1>
      <h2 className="services-title">Our Services</h2>
      <Fade top>
        <div className="services-marquee">
        
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

      {isModalOpen && (
  <div className={`modal-overlay ${isModalOpen ? 'show' : ''}`} onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    
      <button className="close-button" onClick={closeModal}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      
   
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