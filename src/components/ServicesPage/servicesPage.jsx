import React, { useState,  useEffect } from 'react';
import './servicesPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {motion } from 'framer-motion'
import {  Link as RouterLink } from "react-router-dom";
import billboard2 from '../../assets/Drawing/billBoards/billboards.jpg'
import signFabrication from '../../assets/Drawing/signFabrication2.webp'
import tarpPrinting from '../../assets/Drawing/tarpPrinting.jpg'

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};







const servicesData = [
  {
    name: 'Column Ads',
    img: require('../../assets/Drawing/new/column ads 2.jpg'),
  },
 


];


const feedbacks = [
  { id: 1, text: "Been using Miyags Signtech as long as I can remember! Always friendly, great services and honest pricing.", author: "John Doe" },
  { id: 2, text: "I’ve had MIYAGS SIGNTECH do 3 projects for my business. Each time, they’ve delivered a quality product for a fair price. Definitely recommend.", author: "Jane Smith" },
  { id: 3, text: "FAST!!!! Friendly people that got 3 back windows done in 15 minutes easy. HIGHLY RECOMMENDED!!!", author: "Mike Johnson" },
  { id: 4, text: "Outstanding service! They truly go above and beyond to make their customers happy.", author: "Sarah Brown" },
  { id: 5, text: "Quality and professionalism at its best. I will always choose Miyags Signtech for my projects.", author: "Emily Davis" },
];

function ServicesPage() {
  
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedbackIndex((prevIndex) =>
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
      setLoadingProgress(0); // Reset loading bar on change
    }, 6000); // Change feedback every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentFeedbackIndex]);


  return (
    <section id="services-container">  

    <div className="aboutCompany">
      <div className="text-content">
                  <motion.h1 
              initial={{ opacity: 0, x: -100 }}  
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 1 }}
              
              >
             
              SIGN SOLUTIONS TAILORED FOR EVERY BUSINESS
             </motion.h1>
             <motion.p 
              initial={{ opacity: 0, y: 100 }}  
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 1 }}
              >
              Explore our complete custom sign design, build, and installation services 
              from miyagssigntechservices.net to improve the visibility and effectiveness of your brand. 
              We strive to be the ultimate digital sign advertising company in Davao City.
              Our solutions include vibrant digital onsite signs, billboard advertising, commercial signs, and digital billboards that will get your business noticed. Boost your branding through innovative sign solutions from SIGN-TECH.com. Explore our custom signage services below!
            </motion.p>
                  <RouterLink to="/Contact"  onClick={handleScrollToTop}>
                      <button 
                      className='qoutation'>
                        Let's Get Started! <FontAwesomeIcon icon={faArrowRight} /> 
                      
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
              <img src={billboard2}  alt="" />
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

       
              <h2 className="services-title">OUR SERVICES</h2>
              
          </div>
          </motion.div>
        
            <div className="advertising">
                 
                  <div className="sign-fabrication">
                    <img src={signFabrication} alt="" />
                      <h1>SIGN FABRICATION</h1>
                      <p>Transforming ideas into impactful visuals, our sign fabrication process combines precision craftsmanship with durable materials to create custom signage that elevates your brand and captures attention. From concept to completion, we ensure every sign is a perfect blend of innovation, quality, and style..</p>
                      <button> <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                 
                  <div className="billboard">
                  <img src={billboard2} alt="" />
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
                  <img src={servicesData[0].img} alt="" />
                      <h1>STICKER PRINTING</h1>
                      <p>Create a lasting impression with our premium sticker printing services. Whether for branding, packaging, or personal use, we deliver vibrant, durable, and customizable stickers that bring your ideas to life. From sleek finishes to bold designs, we ensure your stickers stand out wherever they’re applied.</p>
                      <button> <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>


</div>
    <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
            className='feedbacks'>
            <h1>CUSTOMER FEEDBACKS</h1>
            <h2 className="feedback-sub">Don’t Just Take Our Word For It!</h2>
            </motion.div>
            <div className="feedback-container">
            {feedbacks.map((feedback, index) => (
              <div
                key={feedback.id}
                className={`feedback ${
                  index === currentFeedbackIndex ? "active" : "hidden"
                }`}
              >
                <p>{feedback.text}</p>
                <h3>- {feedback.author}</h3>
                    <div className="loading-bar-container">
                      <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
                  </div>
            
              </div>
            ))}

           
          </div>
            </section>
  );
}

export default ServicesPage;
