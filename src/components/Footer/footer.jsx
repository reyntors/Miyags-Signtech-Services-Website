import React from 'react';
import './footer.css';
import logo from '../../assets/miyags.png';
import fb from '../../assets/facebook.png';
import ig from '../../assets/instagram.png';
// import Fade from 'react-reveal/Fade';
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
       
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
      <footer className="footer">
        <div className="container">
          
          {/* Left Section */}
          <div className="leftFooter">
            <img src={logo} alt="Miyags Signtech" className="footerImg" />
            <p>At Miyags Signtech, our team is ready to handle projects of any size. With years of experience, we specialize in bringing your ideas to life and promoting businesses.</p>
            <div className="iconImgs">
              <img src={fb} alt="Facebook" className="iconImg" />
              <img src={ig} alt="Instagram" className="iconImg" />
            </div>
            <h2>Head Office</h2>
            <p>Lot 7 Yangzte St. Riverview Village Brgy. 19-B, Bacaca, Davao City, Davao del Sur, Philippines 8000</p>
            <div className="contactNumber">
              <h3>Telephone Number</h3>
              <p>(082) 221-0918</p>
              <h3>Cellphone Number</h3>
              <p>+63917-717-0415</p>
              <h3>Email</h3>
              <p>sales@miyagssigntech.com</p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="middleFooter">
            <h2>Our Services</h2>
            <div className="weBuild">
              <span className="weBuildTitles">Sign Fabrication</span>
              <span className="servicesDesc">Packaging Printing</span>
              <span className="servicesDesc">Tarp Printing</span>
              <span className="servicesDesc">Paper Printing</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="rightFooter">
            <h2>Our Company</h2>
            <ul className="companyLinks">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Careers</a></li>
              <li><a href="#contact">Projects</a></li>
            </ul>
          </div>

        </div>

        <p>Copyright &#169; 2024 Miyags Signtech Services. All rights reserved.</p>
      </footer>
    </motion.footer>
  );
};

export default Footer;
