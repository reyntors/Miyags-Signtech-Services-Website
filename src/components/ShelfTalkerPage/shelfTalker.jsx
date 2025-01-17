import React from "react";
import './shelfTalker.css';
import ShelfTalkerImg from '../../assets/ShelfTalkers/shelf-talkerhead.jpg'
import classic from '../../assets/ShelfTalkers/simple.png'
import popup from '../../assets/ShelfTalkers/FIP-necker_talker-shapes-38.png'
import snapin from '../../assets/ShelfTalkers/snap-in.png'
import floating from '../../assets/ShelfTalkers/floating.png'
import stickyflag from '../../assets/ShelfTalkers/sticky-flag.png'
import snapInFlag from '../../assets/ShelfTalkers/aisle-flag.png'
import wobblers from '../../assets/ShelfTalkers/wobbler.png'
import {motion} from 'framer-motion'









function ShelfTalker() {
  return (
    
    <section id="shelf-talker">
        <img src={ShelfTalkerImg} alt="" className="image-shelf" />
        <div className="shelf-container">
      <h1>Shelf Talkers</h1>
      <p>Looking for shelf talkers? You've found the perfect spot!

            These small printed retail signs play a crucial role as ambassadors for your products. <br/>They help boost sales by sending a straightforward message to shoppers: "Choose me!"

            <br/>Enjoy hassle-free online ordering? Shop now below!</p>
            </div>
            <motion.div 
            initial={{ opacity: 0, x: 100 }}  
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.5 }}>

      <div className="choose-shelf">
        
        <h1>CHOOSE A STYLE TO VIEW PRICING</h1>
                    <div className="choose-container">
                            <div className="choose-img">
                                <img src={classic} alt="" />
                            </div>

                                <h2>Classic</h2>
                                <p>In a range of popular sizes and all your favorite finishes, keep 'em simple or add a crease and/or adhesive.</p>
                            
                    </div>  
                    <div className="choose-container">
                            <div className="choose-img">
                                <img src={popup} alt="" />
                            </div>

                                <h2>Pop-Up</h2>
                                <p>Design around ready-to-go medallion pop-ups, or easily create your own unique, custom shape.</p>
                            
                    </div>  
                    <div className="choose-container">
                            <div className="choose-img">
                                <img src={snapin} alt="" />
                            </div>

                                <h2>Snap-In</h2>
                                <p>Designed to snap into the 1.25" price rail without using adhesive, these are a great fit for shopper marketing!</p>
                            
                    </div>    
                    <div className="choose-container">
                            <div className="choose-img">
                                <img src={floating} alt="" />
                            </div>

                                <h2>Floating</h2>
                                <p>Standing off by a full inch, these 3-dimensional darlings bring depth to your product's shelf-image.</p>
                            
                    </div> 
                    <div className="choose-container">
                            <div className="choose-img">
                                <img src={stickyflag} alt="" />
                            </div>

                                <h2>Sticky Flag</h2>
                                <p>Attaching to just about any surface sticky flags grab shopper attention from clear down the aisle!</p>
                            
                    </div> 
                    <div className="choose-container">
                            <div className="choose-img">
                                <img src={snapInFlag} alt="" />
                            </div>

                                <h2>Snap-In Flag</h2>
                                <p>Snapping into 1.25in price channels, these flags are sure to turn heads and get more product to register.</p>
                            
                    </div> 
                    <div className="choose-container">
                            <div className="choose-img">
                                <img src={wobblers} alt="" />
                            </div>

                                <h2>Wobblers</h2>
                                <p>Cut to a special shape, snaps into price rail, and sticky for attaching just about anywhere!</p>
                            
                    </div> 
                              
                                       
     </div>  
     </motion.div>   
    </section>
    
    
    
  );
}

export default ShelfTalker;
