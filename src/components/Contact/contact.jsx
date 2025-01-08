import React from 'react'
import './contact.css'
import { Fade } from 'react-reveal'
import { FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contactus">
        <Fade bottom>
  <h2 className="reachus">REACH US</h2>
  <span className="contactUsTitle">Contact Us</span>
 
  <div className="contactDetailsContainer">
    <div className="contactDetail">
    <FaPhone className="contactIcon" />
      <h1>CALL US</h1>
      <p className="detailDesc">(082) 221-0918 <br/>+63917-717-0415</p>
    </div>
    <div className="contactDetail">
    <FaEnvelope className="contactIcon" />
      <h1>EMAIL</h1>
      <p className="detailDesc">sales@miyagssigntech.com</p>
    </div>
    <div className="contactDetail">
    <FaBuilding className="contactIcon" />
      <h1>OFFICE</h1>
      <p className="detailDesc">Lot 7 Jordan St. Riverview Village Brgy. 19-B, Bacaca, Davao City, Davao del Sur, Philippines 8000</p>
    </div>
  </div>
  <p className="contactUsDesc">
    For customers and potential customers, kindly use the form provided here. 
    We are eager to talk with you about what your company’s new signage or advertising might look like!
  </p>
</Fade>

        <form action="post" className="contactUs">
          <div className="contactLeft">
            <Fade left>
            <input type="text" className="firstname" placeholder='Full Name' />
            </Fade>
            </div>
            <Fade left>
            <input type="text" className="email" placeholder='Email Address(required)' />
            </Fade>
            <Fade right>
            <input type="text" className="phone" placeholder=' Phone Number' />
            </Fade>
            <Fade left>
            </Fade>
            
            <div className="contactRight">
            
            </div>
            <Fade bottom>
            <textarea name="message" id="" cols="30" rows="6" className="message" placeholder='How can Miyags Signtech help you? ( Message Here )' ></textarea>
            </Fade>

           <button type='submit' className="submitBtn">Send Message</button>
           
        </form>
    </section>
  )
}

export default Contact