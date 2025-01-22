import './feedbacks.css';
import React from 'react';
import {  Link as RouterLink } from "react-router-dom";
import {motion } from 'framer-motion'


const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };




const Feedbacks = () =>{

return(
    <motion.section 
      initial={{ opacity: 0, x: 100 }}  
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true, amount: 0.5 }} 
      transition={{ duration: 0.5 }}
      >
    <section id="feedbacks">

        <h1>CUSTOMER FEEDBACKS</h1>
        <h2 className='feedback-sub'>Don’t Just Take Our Word For It!</h2>

                <div className="feedback-container">

                        <div className="feedback1">
                       <p> “Been using Miyags Signtech  as long as I can remember! Always friendly, great services and honest pricing.”   </p>
                       <h3>- Customer 1</h3>
                        </div>

                        <div className="feedback2">
                       <p> “I’ve had MIYAGS SIGNTECH do 3 projects for my business. Each time, they’ve delivered a quality product for a fair price. Definitely recommend.”   </p>
                       <h3>- Customer 2</h3>
                        </div>

                        <div className="feedback3">
                       <p> “FAST!!!! Friendly people that got 3 back windows done in 15 minutes easy. HIGHLY RECOMMENDED!!!”  </p>
                       <h3>- Customer 3</h3>
                        </div>

                        
                </div>
                 <motion.div 
                                        initial={{ opacity: 0, y: 100 }}  
                                        whileInView={{ opacity: 1, y: 0 }} 
                                        viewport={{ once: true, amount: 0.5 }} 
                                        transition={{ duration: 1 }}
                                        >
                    <div className="project-container">
                    <div className="founded">
                            <h1>FOUNDED</h1>
                            <p>2017</p>
                        </div>
                        <div className="clients">
                            <h1>ACTIVE CLIENTS</h1>
                            <p>20</p>
                        </div>
                        <div className="projects">
                            <h1>PROJECTS</h1>
                            <p>1K+</p>
                        </div>
                     </div>
                     </motion.div>
                     <motion.div 
                                        initial={{ opacity: 0, x: 100 }}  
                                        whileInView={{ opacity: 1, x: 0 }} 
                                        viewport={{ once: true, amount: 0.5 }} 
                                        transition={{ duration: 1 }}
                                        >
                     <div className="light-up">
                        <h1>BRIGHTEN YOUR BRAND TODAY!</h1>
                        <p>Elevate your business’ visibility with our striking signs and billboards. Here at SIGN-TECH.com, we provide inventive, high-quality services that are designed to make an impact. Get in touch today to get started!</p>
                        <RouterLink to='/contact' onClick={handleScrollToTop}>
                        <button>Let's Get Started</button>
                        </RouterLink>
                     </div>
                     </motion.div>

    </section>
    </motion.section>


);


}

export default Feedbacks;