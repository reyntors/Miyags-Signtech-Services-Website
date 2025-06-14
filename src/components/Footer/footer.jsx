import React from 'react';
import './footer.css';
import logo from '../../assets/miyags-logo.png';
// import fb from '../../assets/facebook.png';
// import ig from '../../assets/instagram.png';
// import Fade from 'react-reveal/Fade';
// import {motion} from 'framer-motion'
import {  Link as RouterLink } from "react-router-dom";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    
      <footer className="footer">
        <div className="container">
          
          {/* Left Section */}
          <div className="leftFooter">
            <img src={logo} alt="Miyags Signtech" className="footerImg" />
            <p>At Miyags Signtech, our team is ready to handle projects of any size. With years of experience, we specialize in bringing your ideas to life and promoting businesses.</p>
           
            <div className="contact-details">
                <h3>Telephone Number</h3>
                <p>(082) 221-0918</p>
                <h3>Cellphone Number</h3>
                <p>+63917-717-0415</p>
                <h3>Email</h3>
                <p>sales@miyagssigntech.com</p>
              </div>
              {/* <div className="icon-images">
                <img src={fb} alt="Facebook" className="icon-img" />
                <img src={ig} alt="Instagram" className="icon-img" />
              </div> */}
          </div>

          {/* Middle Section */}
          <div className="middleFooter">
            <h2>Our Services</h2>
            <div className="weBuild">
              <span className="weBuildTitles">Sign Fabrication</span>
              <span className="servicesDesc">Billboard Advertising</span>
              <span className="servicesDesc">Tarp Printing</span>
              <span className="servicesDesc">Sticker Printing</span>
            </div>
            <br/>
            <h2>Shelf Talkers</h2>
            <div className="weBuild">
              <span className="weBuildTitles">On the Shelf</span>
              <span className="servicesDesc">Classic Shelf Talkers</span>
              <span className="servicesDesc">Pop-Up Shelf Talkers</span>
              <span className="servicesDesc">Padded Shelf Talkers</span>
            </div>
            
          </div>

          {/* Right Section */}
          <div className="rightFooter">
            <h2>Our Company</h2>
            <ul className="companyLinks">
              <li><RouterLink to="/" onClick={handleScrollToTop}> Home</RouterLink></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
          
              <li><a href="#contact">Projects</a></li>
            </ul>
            <br/>
            <h2>Point of Purchase</h2>
            <ul className="companyLinks">
              <li><a href="#home">On the Package</a></li>
              <li><a href="#services">Boxes & Packaging</a></li>
              <li><a href="#about">Case Stickers</a></li>
              <li><a href="#contact">Bottle Stickers</a></li>
              <li><a href="#contact">Labels, Decals, & Stickers</a></li>
            
            </ul>
          </div>
        

          <div className="map-container">
              <h2>Head Office</h2>
              <p>
                Lot 7 Yangzte St. Riverview Village Brgy. 19-B, Bacaca, Davao City, 
                Davao del Sur, Philippines 8000
              </p>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2724896527347!2d125.60131537481122!3d7.0943809929088255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d53b7a437a5%3A0xffee75d8ccbea006!2sMiyags%20Signtech%20Services!5e0!3m2!1sen!2sph!4v1737120579966!5m2!1sen!2sph"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Miyags Signtech Services Location"
              ></iframe>
             
            </div>


        </div>
        
        <div className="copyright">
  <p className="center">Copyright &#169; 2025 Miyags Signtech Services. All rights reserved.</p>
  <p className="right">Powered By <a href="https://reynardportfolio.netlify.app/" className="powered">REYNT0RS</a> |<RouterLink to='/privacyPolicy' onClick={handleScrollToTop} className='privacy'>  Privacy Policy </RouterLink></p>
</div>

      </footer>
   
  );
};

export default Footer;
