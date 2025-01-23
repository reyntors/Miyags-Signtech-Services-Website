import React, { useState } from 'react';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronLeft, faChevronRight, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LandingPage from '../../assets/Drawing/SignType/Landing Page3.jpg'
import {motion } from 'framer-motion'
import MonumentImg from '../../assets/monument signage.jpg'
import signFabrication from '../../assets/signFabrication.jpg'
import billboard from '../../assets/billboard.jpg'
import tarpPrinting from '../../assets/tarp-printing.jpg'
import stickerPrinting from '../../assets/sticker-printing.jpg'
import {  Link as RouterLink } from "react-router-dom";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


const imagePaths = {
  Vehicle: require('../../assets/Drawing/Vehicle Graphics Sticker.jpg'),
  Signage: require('../../assets/Drawing/Signage 3.jpg'),
  RoofSignage: require('../../assets/Drawing/Signage 1.jpg'),
  MonumentSignage: require('../../assets/Drawing/Signage 2.jpg'),
  Billboard: require('../../assets/Drawing/billboard.jpg'),
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
      
      <section id="sign">
         
      
          <div className="signtype-container">
          
        
        <svg 
        width="80%" 
      
        viewBox="0 0 4096 2458" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" >

          <image
            id="LandingPage2"
            href={LandingPage}  
            width="100%"  
            height="100%"  
            style={{ borderRadius: '10px' }}
            
          />
   

<path 
      id="signage16" 
      opacity="0.01" 
      d="M449.5 1598V1685.5L247 1598V1519.5L449.5 1598Z" 
      fill="#D9D9D9" 
      stroke="black"
      />
<path 
      id="signage15" 
      opacity="0.01" 
      d="M631.5 1659.5L478 1601.5V1586.5L462 1581L467 1458L625 1524L631.5 1659.5Z" 
      fill="#D9D9D9" 
      stroke="black"
      />
<path 
      id="signage14" 
      opacity="0.01" 
      d="M839.5 1344L783 1600L633 1546V1521L599 1502.5L663.5 1294L839.5 1344Z" 
      fill="#D9D9D9" 
      stroke="black"
      />
<path 
      id="banners" 
      opacity="0.01" 
      d="M1582.5 1333.5V1459.5L930 1355.5V1274.5L1582.5 1333.5Z" 
      fill="#D9D9D9" 
      stroke="black"
      />
<path 
      id="signage13" 
      opacity="0.01" 
      d="M603 1162.5V1248H767V1162.5H603Z" 
      fill="#D9D9D9" 
      stroke="black"/>
<path 
      id="signage12" 
      opacity="0.01" 
      d="M450.5 1189H122.5V992H450.5V1189Z" 
      fill="#D9D9D9" 
      stroke="black"
/>
<path 
      id="signage11" 
      opacity="0.01" 
      d="M1415.5 1781L978.5 1814V1613L1415.5 1592V1781Z" 
      fill="#D9D9D9" 
      stroke="black"
/>
<path 
      id="signage10" 
      opacity="0.01" 
      d="M2269 1702L2260.5 2027.5L2354.5 2051.5V2080.5L2197 2154L1704 1979.5V1953.5L1769 1919.5V1657.5L1798 1645.5L1843 1651C1902.67 1605 2050.4 1547.6 2164 1686L2269 1702Z" 
      fill="#D9D9D9" 
      stroke="black"
      onMouseEnter={() => handleMouseEnter('MonumentSignage')} 
      onMouseLeave={handleMouseLeave}
/>
<path 
      id="vehicle" 
      opacity="0.01" 
      d="M3328.5 1707.5L3268 1757.5C3265.17 1810.33 3236.2 1898.1 3143 1826.5L2863 1925.5C2853.17 1969.17 2806.4 2040 2698 1974L2614 1991.5L2315 1897.5L2301.5 1847.5L2278 1800L2301.5 1778L2315 1722L2601 1630.5L2743.5 1521.5L2956 1499.5L3124 1521.5L3184 1564.5L3275.5 1576V1600L3300.5 1610L3317 1675L3328.5 1707.5Z" 
      fill="#D9D9D9" 
      stroke="black"
      onMouseEnter={() => handleMouseEnter('Vehicle')}  
          onMouseLeave={handleMouseLeave}
/>
<path 
      id="signage9" 
      opacity="0.01" 
      d="M3473.5 1857L3371 1885.5L3295 1843L3350 1829.5V1391L3205 1408.5L3166.5 1376L3194 1323.5L3350 1310V1202.5H3407.5V1376L3592 1391L3626 1436L3584.5 1472.5L3401 1448.5L3407.5 1829.5L3473.5 1857Z" 
      fill="#D9D9D9" 
      stroke="black"
/>
<path 
      id="signage8" 
      opacity="0.01" d="M1821.5 1228V1498.5L2373 1462.5V1236L1821.5 1228Z" 
      fill="#D9D9D9" 
      stroke="black"
/>
<path 
      id="signage7" 
      opacity="0.01" 
      d="M1694.5 1108.5V1244.5L810.5 1211.5V1162.5L892.5 1126L1694.5 1108.5Z" 
      fill="#D9D9D9" 
      stroke="black"
      />
<path 
      id="signage6" 
      opacity="0.01" 
      d="M3272.5 738.5L3840 669V972.5L3272.5 998V738.5Z" 
      fill="#D9D9D9" 
      stroke="black"
      />
<path 
      id="signage5" 
      opacity="0.01" 
      d="M2260 723V1005.5L2997.5 1054.5V833.5L2260 723Z" 
      fill="#D9D9D9" 
      stroke="black"
      />
<path 
      id="signage4" 
      opacity="0.01" 
      d="M887.5 966V1071L688 1075.5L687 963L887.5 966Z" 
      fill="#D9D9D9" 
      stroke="black"
      />
<path 
      id="signage3" 
      opacity="0.01" 
      d="M910.5 972V1079L1520 1048.5V879L910.5 972Z" 
      fill="#D9D9D9" 
      stroke="black"
      />
<path 
      id="signage2" 
      opacity="0.01" 
      d="M1474 679V770L922.5 897V822L1474 679Z" 
      fill="#D9D9D9" 
      stroke="black"
      onMouseEnter={() => handleMouseEnter('RoofSignage')}  
          onMouseLeave={handleMouseLeave}
      />
<path 
      id="billboard" 
      opacity="0.01" 
      d="M920.5 311.5V709H342V311.5H920.5Z" 
      fill="#D9D9D9" 
      stroke="black"
      onMouseEnter={() => handleMouseEnter('Billboard')}  
          onMouseLeave={handleMouseLeave}
      />
<path 
      id="signage1" 
      opacity="0.01" 
      d="M1710.5 1029H1544.5V444.5L1710.5 460V1029Z" 
      fill="#D9D9D9" 
      stroke="black"
      />
   
      </svg>
      <motion.section 
      initial={{ opacity: 0, x: 100 }}  
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true, amount: 0.5 }} 
      transition={{ duration: 0.5 }}
      >
      <h1 className="explore">GUIDE TO BASIC SIGN TYPES</h1>
          <div className="signDesc">
            <p>
              This drawing helps you illustrate some basic types of signs that
              assist businesses and organizations in communicating effectively,
              offering insights into selecting the ideal signage solution for
              various needs.
            </p>
          </div>
          </motion.section>
      


            {hoveredImage && (
              <div className="hover-overlay" style={{ pointerEvents: "none" }}>
                <img  src={hoveredImage} alt="Example"  />
                
              </div>
            )}
          </div>
        </section>
      
   <div className="services-container">  

        <div className="aboutCompany">
          <div className="text-content">
                      <motion.h1 
                  initial={{ opacity: 0, x: -100 }}  
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, amount: 0.5 }} 
                  transition={{ duration: 1 }}
                  >
                  <h1>PROFESSIONAL ADVERTISING SOLUTIONS <br/> TO ELEVATE YOUR BUSINESS</h1>
                 </motion.h1>
                 <motion.p 
                  initial={{ opacity: 0, y: 100 }}  
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, amount: 0.5 }} 
                  transition={{ duration: 1 }}
                  >
                  <p>Proudly serving Davao City, Mindanao, and beyond, Miyags Signtech Services 
                    is your trusted partner for exceptional signage and advertising needs. <br/>
                    From concept to completion, all our services are handled in-house to ensure quality and precision. 
                    We specialize in custom-made signage, billboard advertising, and a wide range of marketing 
                    solutions to help your brand stand out. With our innovative designs, reliable service, 
                    and expert craftsmanship, we ensure your business makes a bold statement and connects with your target
                     audience. Get in touch with us today to bring your vision to life!</p>
                </motion.p>
                <RouterLink to="/contact"  onClick={handleScrollToTop}>
                     <button 
                     className='qoutation'>
                      Request Free Qoutation 
                      <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                      </RouterLink>
               </div>
               <motion.div 
                  initial={{ opacity: 0, x: 100 }}  
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, amount: 0.5 }} 
                  transition={{ duration: 1 }}
                  >
            <div className="companyImg">
             <img src={MonumentImg}  alt="" />
            </div>
            </motion.div>
        </div>    

        <motion.div 
                  initial={{ opacity: 0, x: 100 }}  
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, amount: 0.5 }} 
                  transition={{ duration: 1 }}
                  >
              <div className="text-content2">

                  <h1 className="explore">EVERYTHING YOU NEED</h1>
                  <h2 className="services-title">OUR SERVICES</h2>
                  
              </div>
              </motion.div>
              <motion.div 
                        initial={{ opacity: 0, x: -100 }}  
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ duration: 1 }}
                        >
                <div className="advertising">
                     
                      <div className="sign-fabrication">
                        <img src={signFabrication} alt="" />
                          <h1>SIGN FABRICATION</h1>
                          <p>Transforming ideas into impactful visuals, our sign fabrication process combines precision craftsmanship with durable materials to create custom signage that elevates your brand and captures attention. From concept to completion, we ensure every sign is a perfect blend of innovation, quality, and style..</p>
                          <button> <FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>
                     
                      <div className="billboard">
                      <img src={billboard} alt="" />
                          <h1>BILLBOARD ADVERTISING</h1>
                          <p>We want all of our clients to experience the impressive level of skill and professionalism of our designers when working with Miyags Signtech Services. All of our services, especially this one, exist to make your life more beautiful. You can trust us to provide everything you need in order to produce truly exceptional designs.</p>
                          <button> <FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>
                     
                      <div className="tarp-printing">
                      <img src={tarpPrinting} alt="" />
                          <h1>TARP PRINTING</h1>
                          <p>Delivering vibrant, high-quality tarp prints tailored to your needs, we specialize in creating eye-catching designs for events, promotions, and advertisements. With cutting-edge technology and durable materials, our tarpaulins are built to make a lasting impression, indoors or outdoors.</p>
                          <button> <FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>
                      <div className="sticker-printing">
                      <img src={stickerPrinting} alt="" />
                          <h1>STICKER PRINTING</h1>
                          <p>Create a lasting impression with our premium sticker printing services. Whether for branding, packaging, or personal use, we deliver vibrant, durable, and customizable stickers that bring your ideas to life. From sleek finishes to bold designs, we ensure your stickers stand out wherever they’re applied.</p>
                          <button> <FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>




                </div>
                </motion.div>
                <h1>Explore Our Services</h1>
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

              {/* <div className="learn-more-container">
                <button className="learn-more-btn">
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div> */}
      </div>   
    </section>
    
  );
};

export default Services;