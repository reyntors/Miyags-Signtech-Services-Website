import './feedbacks.css';
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { motion } from 'framer-motion';
import logo from '../../assets/miyags-logo2.png'

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = Object.values(importAll(require.context('../../assets/Ourclients', false, /\.(png|jpe?g|svg|webp)$/)));

const feedbacks = [
    { id: 1, text: "Been using Miyags Signtech as long as I can remember! Always friendly, great services and honest pricing.", author: "John Doe" },
    { id: 2, text: "I’ve had MIYAGS SIGNTECH do 3 projects for my business. Each time, they’ve delivered a quality product for a fair price. Definitely recommend.", author: "Jane Smith" },
    { id: 3, text: "FAST!!!! Friendly people that got 3 back windows done in 15 minutes easy. HIGHLY RECOMMENDED!!!", author: "Mike Johnson" },
    { id: 4, text: "Outstanding service! They truly go above and beyond to make their customers happy.", author: "Sarah Brown" },
    { id: 5, text: "Quality and professionalism at its best. I will always choose Miyags Signtech for my projects.", author: "Emily Davis" },
  ];

const Feedbacks = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedbackIndex((prevIndex) =>
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
      setLoadingProgress(0); 
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentFeedbackIndex]);


  const projectContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          startCounting();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (projectContainerRef.current) {
      observer.observe(projectContainerRef.current);
    }

    
  }, [hasCounted]);

  const startCounting = () => {
    let clientsInterval = setInterval(() => {
      setClientsCount((prev) => {
        if (prev < 2000) {
          return prev + 10;
        }
        clearInterval(clientsInterval);
        return 2467;
      });
    }, 10);

    let projectsInterval = setInterval(() => {
      setProjectsCount((prev) => {
        if (prev < 1000) {
          return prev + 5;
        }
        clearInterval(projectsInterval);
        return 3257;
      });
    }, 10);
  };

  return (
   
      <section id="feedbacks">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
        <h1>CUSTOMER FEEDBACKS</h1>
        <h2 >Don’t Just Take Our Word For It!</h2>
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
      

        <motion.div
          ref={projectContainerRef}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="project-container">
            <div className="founded">
              <h1>FOUNDED</h1>
              <p>2013</p>
            </div>
            <div className="clients">
              <h1>CLIENTS</h1>
              <p>{clientsCount.toLocaleString()}K</p>
            </div>
            <div className="projects">
              <h1>PROJECTS</h1>
              <p>{projectsCount.toLocaleString()}K</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="ourClients">
            <img src={logo} alt="" className="logoClient" />
            <h1 className='our-Clients'>OUR VALUED CLIENTS</h1>
          
            <div className="clients-grid">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Project ${index + 1}`}
                            className="client-image"
                          
                        />
                    ))}
               
            </div>
          </div>


          </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="light">
            <h1>BRIGHTEN YOUR BRAND TODAY!</h1>
            <p>
              Elevate your business’ visibility with our striking signs and billboards. Here at Miyags Signtech Services,
              we provide inventive, high-quality services that are designed to make an impact. Get in touch today to get
              started!
            </p>
            <RouterLink to="/contact" onClick={handleScrollToTop}>
              <button>Let's Get Started!</button>
            </RouterLink>
          </div>
        </motion.div>
      </section>
   
  );
};

export default Feedbacks;
